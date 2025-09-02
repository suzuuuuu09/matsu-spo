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

      <Marker icon="lantern" :lat-lng="[35.6595, 139.7748]" />
    </l-map>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Marker from "@/components/Marker.vue";

const props = defineProps<{
  url: string
  attribution: string
}>();

const iconUrl = new URL(`@/assets/img/lantern.png`, import.meta.url).href;
const zoom = ref(15);
const center = ref<[number, number]>([35.6769883, 139.7588499]);
</script>
