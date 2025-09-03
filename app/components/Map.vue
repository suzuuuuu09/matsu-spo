<template>
  <div class="map-container">
    <LMap
      v-model:zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      style="height: 100vh; width: 100%;"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
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
    </LMap>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import { MARKER_ITEMS } from '@/constants/marker';
import type { MarkerItem } from '@/constants/marker';

const zoom = ref(15);
const center = ref<[number, number]>([35.18490, 136.89968]);
const markerItems = MARKER_ITEMS;

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
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
}
</style>

