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

const props = defineProps<{
  zoom: number; // マップ開いた時のズームレベル
  center: [number, number]; // マップ開いた時の中心座標
  useGlobalLeaflet?: boolean; // グローバルのLeafletを使うか
  options?: Record<string, any>; // Leafletのオプション
}>();
</script>