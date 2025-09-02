<template>
  <l-marker :lat-lng="latLng" @click="onMarkerClick">
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
  item?: any; // マーカーのデータ
}>();

// publicにある画像参照する
const iconUrl = computed(() => `/img/${props.icon}.png`);

// イベントを親コンポーネントに伝えるためのemit
const emit = defineEmits<{
  markerClick: [item: any];
}>();

// マーカーがクリックされたときの処理
const onMarkerClick = () => {
  emit('markerClick', props.item);
};
</script>