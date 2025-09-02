<template>
  <!-- サイドバー -->
  <div
    overflow="hidden"
    bg="color-background"
    shadow="lg"
    class="transition-all duration-300 ease-in-out"
    :class="[
      isOpen ? 'max-w-[80vw] w-80 min-w-[280px]' : 'w-0',
      'sm:max-w-[400px] md:max-w-[320px]'
    ]"
  >
    <div
      v-if="isOpen"
      p="4"
      max-h="screen"
      overflow="y-auto"
    >
      <div flex="~ justify-end" m="b-4">
        <button
          @click="$emit('close')"
          class="transition-all duration-200"
          w="8"
          h="8"
          flex="~ items-center justify-center shrink-0"
          border="none"
          cursor="pointer"
          bg="on-background hover:on-background/70"
          rounded="full"
          text="main-text/70 hover:main-text"
        >
          <div class="i-mdi-close" w="5" h="5"></div>
        </button>
      </div>

      <div v-if="selectedMarker">
        <!-- 祭りの写真 -->
        <nuxt-img 
          :src="selectedMarker.imageUrl"
          class="mb-4 rounded-lg shadow-md max-w-70 flex justify-center mx-auto"
        />
        
        <!-- 祭りの名前 -->
        <h3
          text="lg"
          font="semibold"
          m="b-2"
          class="break-words"
        >{{ selectedMarker.name }}</h3>

        <!-- 祭りの場所 -->
        <div m="b-3">
          <span
            p="x-2 y-1"
            text="gradient-100 sm"
            gap="1"
            class="inline-flex items-center bg-gradient-100/10 rounded">
            <div class="i-mdi-map-marker flex-shrink-0"></div>
            <div class="whitespace-normal break-words">{{ selectedMarker.place }}</div>
          </span>
        </div>

        <!-- 祭りの日付 -->
        <div m="b-3">
          <span class="inline-flex items-center gap-1 bg-gradient-300/10 text-gradient-300 px-2 py-1 rounded text-sm">
            <div class="i-mdi-calendar flex-shrink-0"></div>
            <div class="whitespace-pre-line break-words">{{ formattedDate }}</div>
          </span>
        </div>

        <!-- 祭りの説明 -->
        <p text="sm" m="b-4" class="leading-relaxed break-words">
          {{ selectedMarker.description }}
        </p>
        <div v-if="selectedMarker.referenceUrl" m="b-12">
          <a
            :href="selectedMarker.referenceUrl"
            target="_blank"
            rel="noopener noreferrer"
            p="x-3 y-2"
            bg="primary/80 hover:primary"
            inline="flex"
            items="center"
            gap="2"
            class="text-white text-sm rounded transition-colors break-words"
          >
            <div class="i-mdi-web" w="4" h="4"></div>
            参照元を見る
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MarkerItem } from "@/constants/marker";
import dayjs from 'dayjs';

const props = defineProps<{
  isOpen: boolean;
  selectedMarker: MarkerItem | null;
}>();

defineEmits<{
  close: [];
  toggle: [];
}>();

const formattedDate = computed(() => {
  if (!props.selectedMarker?.date) return '未定';
  const date = props.selectedMarker.date;
  if (dayjs.isDayjs(date)) {
    return date.format('YYYY年MM月DD日');
  } else if (Array.isArray(date)) {
    return date.map(d => d.format('YYYY年MM月DD日')).join(',\n');
  } else if ('start' in date && 'end' in date) {
    return `${date.start.format('YYYY年MM月DD日')} ~ ${date.end.format('YYYY年MM月DD日')}`;
  }
  return '未定';
});
</script>
