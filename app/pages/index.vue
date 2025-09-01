<template>
  <div>
    <p class="">Hello world!🏮</p>
    <ClientOnly>
      <div id="map" class="h-96 w-full"></div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  const map = L.map('map').setView([35.6895, 139.6917], 13) // 東京の座標

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  L.marker([35.6895, 139.6917]).addTo(map)
    .bindPopup('東京')
    .openPopup()
})
</script>