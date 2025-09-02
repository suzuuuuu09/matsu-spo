<template>
  <l-marker :lat-lng="latLng">
    <l-icon
      :icon-size="[32, 32]"
      :icon-url="iconUrl"
    />
  </l-marker>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { LMarker, LIcon } from '@vue-leaflet/vue-leaflet';

const props = defineProps<{
  icon: string;
  latLng: [number, number];
}>();

// publicフォルダの画像を参照
const iconUrl = computed(() => `/img/${props.icon}.png`);
</script>