<template>
  <ClientOnly>
    <div id="map" class="h-screen w-screen"></div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const { default: L } = await import('leaflet')
  await import('leaflet/dist/leaflet.css')

  const map = L.map('map').setView([35.6895, 139.6917], 13) // 東京の座標

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  L.marker([35.6895, 139.6917]).addTo(map)
    .bindPopup('東京')
    .openPopup()
})
</script>