<template>
  <div></div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';

const props = defineProps<{
  icon: string;
  latLng: [number, number];
  item?: any; // マーカーのデータ
}>();

// publicにある画像参照する
const iconUrl = computed(() => `/img/icon/${props.icon}.svg`);

// イベントを親コンポーネントに伝えるためのemit
const emit = defineEmits<{
  markerClick: [item: any];
}>();

// マーカーがクリックされたときの処理
const onMarkerClick = () => {
  emit('markerClick', props.item);
};

onMounted(async () => {
  try {
    // 動的にLeafletを読み込む
    const L = await import('leaflet');
    
    // カスタムアイコンを作成
    const customIcon = L.default.icon({
      iconUrl: iconUrl.value,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // マーカーを作成（実際の地図への追加は親コンポーネントで行う）
    const marker = L.default.marker(props.latLng, { icon: customIcon });
    marker.on('click', onMarkerClick);
    
    // 親コンポーネントにマーカーを渡す（必要に応じて実装）
  } catch (error) {
    console.error('Failed to load Leaflet for marker:', error);
  }
});
</script>
