<template>
  <div flex="~" h="screen">
    <Sidebar
      :is-open="isOpenSidebar"
      :selected-marker="selectedMarker"
      @close="closeSidebar"
      @toggle="toggleSidebar"
    />
    <Map
      :is-open-sidebar="isOpenSidebar"
      :selected-marker="selectedMarker"
      @marker-click="onMarkerClick"
    />
  </div>
</template>

<script setup lang="ts">
import Map from '~/components/Map.vue'
import Sidebar from '~/components/Sidebar.vue'
import type { MarkerItem } from '~/constants/marker'

// サイドバーの状態管理
const isOpenSidebar = ref(false)
const selectedMarker = ref<MarkerItem | null>(null)

// サイドバーの開閉を切り替え
const toggleSidebar = () => {
  isOpenSidebar.value = !isOpenSidebar.value;
};

// サイドバーを閉じる
const closeSidebar = () => {
  isOpenSidebar.value = false;
};

// マーカークリック時のハンドラー
const onMarkerClick = (item: MarkerItem) => {
  selectedMarker.value = item;
  isOpenSidebar.value = true; // マーカーをクリックしたらサイドバーを開く
};
</script>