<template>
  <l-tile-layer
    :url="url"
    :attribution="attribution"
    layer-type="base"
    name="OpenStreetMap"
  ></l-tile-layer>
</template>

<script setup lang="ts">
import { LTileLayer } from '@vue-leaflet/vue-leaflet';

const props = defineProps<{
  url: string;
  attribution: string;
}>();
</script>
