<template>
  <div w="screen" h="screen">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :use-global-leaflet="false"
      :center="center"
      :options="{zoomControl: false}"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

const props = defineProps<{
  url: string
  attribution: string
}>()

const zoom = ref(15)
const center = ref([35.6769883, 139.7588499])
</script>
