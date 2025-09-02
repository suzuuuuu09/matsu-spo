<template>
  <div flex="1" class="relative">
    <l-map
      ref="map"
      :zoom="zoom"
      :use-global-leaflet="useGlobalLeaflet"
      :center="center"
      :options="{zoomControl: false}"
    >
      <slot />
    </l-map>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import "leaflet/dist/leaflet.css";
import { LMap } from "@vue-leaflet/vue-leaflet";
import L from 'leaflet';

// Leafletのデフォルトアイコンを修正
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const props = defineProps<{
  zoom: number; // マップ開いた時のズームレベル
  center: [number, number]; // マップ開いた時の中心座標
  useGlobalLeaflet?: boolean; // グローバルのLeafletを使うか
  options?: Record<string, any>; // Leafletのオプション
}>();
</script>