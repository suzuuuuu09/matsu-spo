// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'まつすぽっ！',
      meta: [
        { name: 'description', content: '「まつすぽっ！」は祭りをサポートするアプリです。' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/image'],
  ssr: false,
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      routes: ['/']
    },
    rollupConfig: {
      external: [
        /^leaflet/,
        /@vue-leaflet/
      ]
    }
  },
  vite: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      exclude: ['leaflet', '@vue-leaflet/vue-leaflet']
    }
  }
})