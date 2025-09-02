<template>
    <MapContainer
      :zoom="15"
      :center="[35.18490, 136.89968]"
      :useGlobalLeaflet="false"
      :options="{zoomControl: false}"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <Marker
        v-for="(item, index) in markerItems"
        :key="index"
        :icon="item.icon"
        :lat-lng="item.latLng"
        :item="item"
        @marker-click="onMarkerClick"
      />
    </MapContainer>
</template>

<script setup lang="ts">
// @ts-ignore
import Marker from "@/components/Marker.vue";
import TileLayer from "@/components/TileLayer.vue";
import MapContainer from "@/components/MapContainer.vue";
import { MARKER_ITEMS } from "@/constants/marker";
import type { MarkerItem } from "@/constants/marker";

const props = defineProps<{
  isOpenSidebar: boolean;
  selectedMarker: MarkerItem | null;
}>();

const emit = defineEmits<{
  markerClick: [item: MarkerItem];
}>();

const markerItems = MARKER_ITEMS;

// マーカーをクリックしたとき
const onMarkerClick = (item: MarkerItem) => {
  emit('markerClick', item);
};
</script>
