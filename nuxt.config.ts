// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/image'],
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      routes: ['/']
    },
    rollupConfig: {
      external: [
        'leaflet/dist/images/marker-icon.png',
        'leaflet/dist/images/marker-icon-2x.png', 
        'leaflet/dist/images/marker-shadow.png',
        /^leaflet\/dist\/images\//
      ]
    }
  },
  vite: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['leaflet'],
      exclude: ['leaflet/dist/images']
    },
    build: {
      rollupOptions: {
        external: [
          'leaflet/dist/images/marker-icon.png',
          'leaflet/dist/images/marker-icon-2x.png',
          'leaflet/dist/images/marker-shadow.png',
          /^leaflet\/dist\/images\//
        ]
      }
    }
  }
})