<template>
  <div flex="1" class="relative">
    <ClientOnly>
      <l-map
        ref="map"
        :zoom="zoom"
        :use-global-leaflet="useGlobalLeaflet"
        :center="center"
        :options="{zoomControl: false}"
      >
        <slot />
      </l-map>
      <template #fallback>
        <div class="w-full h-full flex items-center justify-center bg-gray-100">
          <div class="text-gray-500">マップを読み込み中...</div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { LMap } from "@vue-leaflet/vue-leaflet";

const props = defineProps<{
  zoom: number; // マップ開いた時のズームレベル
  center: [number, number]; // マップ開いた時の中心座標
  useGlobalLeaflet?: boolean; // グローバルのLeafletを使うか
  options?: Record<string, any>; // Leafletのオプション
}>();
</script>

<style>
@import "leaflet/dist/leaflet.css";
</style>