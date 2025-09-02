<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
// Leafletプラグインがクライアントサイドで確実に読み込まれるようにする
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    }
  ]
})
</script>
