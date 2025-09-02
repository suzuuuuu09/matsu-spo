<template>
  <MapContainer
    :zoom="15"
    :center="[35.18490, 136.89968]"
    ref="mapContainer"
  />
</template>

<script setup lang="ts">
import MapContainer from "@/components/MapContainer.vue";
import { MARKER_ITEMS } from "@/constants/marker";
import type { MarkerItem } from "@/constants/marker";
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps<{
  isOpenSidebar: boolean;
  selectedMarker: MarkerItem | null;
}>();

const emit = defineEmits<{
  markerClick: [item: MarkerItem];
}>();

const mapContainer = ref();
const markerItems = MARKER_ITEMS;

// マーカーをクリックしたとき
const onMarkerClick = (item: MarkerItem) => {
  emit('markerClick', item);
};

onMounted(async () => {
  // MapContainerが読み込まれるまで待つ
  await nextTick();
  
  // Leafletが利用可能になった後にマーカーを追加
  setTimeout(async () => {
    try {
      const L = await import('leaflet');
      const map = mapContainer.value?.getMap();
      
      if (map) {
        // マーカーを追加
        markerItems.forEach((item) => {
          const customIcon = L.default.icon({
            iconUrl: `/img/${item.icon}.png`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
          });

          const marker = L.default.marker(item.latLng, { icon: customIcon });
          marker.on('click', () => onMarkerClick(item));
          marker.addTo(map);
        });
      }
    } catch (error) {
      console.error('Failed to add markers:', error);
    }
  }, 1000);
});
</script>
