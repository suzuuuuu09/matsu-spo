<template>
  <div w="full" h="screen" class="relative">
    <LMap
      v-model:zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      style="height: 100vh; width: 100%;"
      :options="{ zoomControl: false }"
      ref="mapRef"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <!-- 祭りのマップピン -->
      <LMarker
        v-for="marker in markerItems"
        :key="marker.name"
        :lat-lng="marker.latLng"
        @click="onMarkerClick(marker)"
      >
        <LIcon
          :icon-url="`/img/icon/${marker.icon}.svg`"
          :icon-size="[32, 32]"
          :icon-anchor="[16, 32]"
          :popup-anchor="[0, -32]"
        />
      </LMarker>

      <!-- 現在地マーカー -->
      <LMarker
        v-if="currentLocation"
        :lat-lng="currentLocation"
      >
        <LIcon
          icon-url="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiMzQjgxRjYiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiIGZpbGw9IiNGRkZGRkYiLz4KPC9zdmc+"
          :icon-size="[24, 24]"
          :icon-anchor="[12, 12]"
        />
      </LMarker>
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { MARKER_ITEMS } from '@/constants/marker';
import type { MarkerItem } from '@/constants/marker';

// マップ開いた時のズーム倍率
const normalZoomLevel = 15;
// 現在地取得時のズーム倍率
const currentZoomLevel = 16;
// マップ開いた時の中心座標(名古屋城)
const normalCenter: [number, number] = [35.18490, 136.89968];

// ズーム倍率の設定
const zoom = ref(normalZoomLevel);
// 中心座標の設定
const center = ref<[number, number]>(normalCenter);
const markerItems = MARKER_ITEMS;

// 現在地関連の状態
const currentLocation = ref<[number, number] | null>(null);
const isGettingLocation = ref(false);
const mapRef = ref();

const props = defineProps<{
  isOpenSidebar: boolean;
  selectedMarker: MarkerItem | null;
}>();

const emit = defineEmits<{
  markerClick: [item: MarkerItem];
}>();

// マーカーをクリックしたとき
const onMarkerClick = (item: MarkerItem) => {
  emit('markerClick', item);
};

// 現在地を取得する関数
const getCurrentLocation = async () => {
  if (!navigator.geolocation) {
    alert('このブラウザは位置情報に対応していません');
    return;
  }

  isGettingLocation.value = true;

  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000 // 5分間キャッシュ
    });
  });

  const { latitude, longitude } = position.coords;
  currentLocation.value = [latitude, longitude];

  // 地図の中心を現在地に移動
  center.value = [latitude, longitude];
  zoom.value = currentZoomLevel;

  // 現在地にビューを設定
  await nextTick();
  if (mapRef.value?.leafletObject) {
    // 中心とズームを同時に設定
    mapRef.value.leafletObject.setView([latitude, longitude], currentZoomLevel);
  }

  isGettingLocation.value = false;
};

// 現在地を取得
onMounted(() => {
  getCurrentLocation();
});
</script>
