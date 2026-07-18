import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon/*.png', 'icons/*.png'],
      manifest: {
        name: 'ElectronicsInfo',
        short_name: 'ElectronicsInfo',
        description: 'Interactive Electronics Learning Platform',
        theme_color: '#0a0a1a',
        background_color: '#0a0a1a',
        display: 'standalone',
        orientation: 'any',
        categories: ['education', 'science', 'technology'],
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcuts: [
          { name: 'Browse Components', url: '/categories', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
          { name: 'Bookmarks', url: '/bookmarks', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
          { name: 'Calculator', url: '/calculator', icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }] },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        globPatterns: ['**/*.{js,css,html,png,webp,avif,woff2,json}'],
        globIgnores: ['**/node_modules/**/*'],
        runtimeCaching: [
          {
            urlPattern: /^https?:\/\/.*\/api\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'api-cache', expiration: { maxEntries: 50, maxAgeSeconds: 86400 } },
          },
          // Cache component images: CacheFirst for fast offline access
          {
            urlPattern: /\/images\/components\/.+\/.+\.(png|webp|avif)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'component-images',
              expiration: {
                maxEntries: 2000,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              rangeRequests: true,
            },
          },
          // Cache flat component images (thumbnail)
          {
            urlPattern: /\/images\/components\/.+\.(png|webp|jpg)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'component-images-thumbnails',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) return 'vendor-react'
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/lucide') || id.includes('node_modules/react-icons')) return 'vendor-ui'
          if (id.includes('node_modules/zustand') || id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) return 'vendor-utils'
          if (id.includes('node_modules/recharts')) return 'vendor-charts'
          if (id.includes('node_modules/jspdf') || id.includes('node_modules/html2canvas')) return 'vendor-export'
          if (id.includes('node_modules/katex')) return 'vendor-math'
          if (id.includes('node_modules/qrcode')) return 'vendor-qr'
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
