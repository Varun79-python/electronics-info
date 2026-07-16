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
      includeAssets: ['favicon/*.svg', 'icons/*.svg'],
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
          { src: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
        ],
        shortcuts: [
          { name: 'Browse Components', url: '/categories', icons: [{ src: '/icons/icon-192.svg', sizes: '192x192' }] },
          { name: 'Bookmarks', url: '/bookmarks', icons: [{ src: '/icons/icon-192.svg', sizes: '192x192' }] },
          { name: 'Calculator', url: '/calculator', icons: [{ src: '/icons/icon-192.svg', sizes: '192x192' }] },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2,json}'],
        runtimeCaching: [
          {
            urlPattern: /^https?:\/\/.*\/api\/.*/i,
            handler: 'NetworkFirst',
            options: { cacheName: 'api-cache', expiration: { maxEntries: 50, maxAgeSeconds: 86400 } },
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
