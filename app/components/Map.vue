<template>
  <div w="screen" h="screen">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :use-global-leaflet="false"
      :center="center"
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
      />
    </l-map>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import "leaflet/dist/leaflet.css";
import { LMap } from "@vue-leaflet/vue-leaflet";
import Marker from "@/components/Marker.vue";
import TileLayer from "@/components/TileLayer.vue";
import { MARKER_ITEMS } from "@/constants/marker";

// 開いた時のズームレベル
const zoom = ref(15);
// 開いたときに表示する座標
const center = ref<[number, number]>([35.18490, 136.89968]);
const markerItems = MARKER_ITEMS;
</script>
