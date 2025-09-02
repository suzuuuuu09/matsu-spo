<template>
  <div flex="1" class="relative">
    <ClientOnly>
      <div v-if="isLoaded" ref="mapContainer" class="w-full h-full"></div>
      <template #fallback>
        <div class="w-full h-full flex items-center justify-center bg-gray-100">
          <div class="text-gray-500">マップを読み込み中...</div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

const props = defineProps<{
  zoom: number; // マップ開いた時のズームレベル
  center: [number, number]; // マップ開いた時の中心座標
  useGlobalLeaflet?: boolean; // グローバルのLeafletを使うか
  options?: Record<string, any>; // Leafletのオプション
}>();

const mapContainer = ref<HTMLElement>();
const isLoaded = ref(false);
let map: any = null;

onMounted(async () => {
  try {
    // 動的にLeafletを読み込む
    const L = await import('leaflet');

    // Leaflet CSSを動的に読み込む
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Leafletマーカーアイコンの問題を修正
    delete (L.default.Icon.Default.prototype as any)._getIconUrl;
    L.default.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    isLoaded.value = true;
    
    await nextTick();
    
    // マップを初期化
    if (mapContainer.value) {
      map = L.default.map(mapContainer.value, {
        zoomControl: false,
        ...props.options
      }).setView(props.center, props.zoom);

      // タイルレイヤーを追加
      L.default.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(map);
    }
  } catch (error) {
    console.error('Failed to load Leaflet:', error);
  }
});

// マップインスタンスを外部に公開
defineExpose({
  getMap: () => map
});
</script>