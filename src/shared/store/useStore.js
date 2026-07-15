import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      theme: 'dark',
      textScale: 'normal',
      bookmarks: [],
      recentlyViewed: [],
      quizScores: {},
      readingProgress: {},
      searchQuery: '',

      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),
      setTextScale: (textScale) => set({ textScale }),

      toggleBookmark: (componentId) =>
        set((s) => ({
          bookmarks: s.bookmarks.includes(componentId)
            ? s.bookmarks.filter((id) => id !== componentId)
            : [...s.bookmarks, componentId],
        })),

      addRecentlyViewed: (componentId) =>
        set((s) => {
          const filtered = s.recentlyViewed.filter((id) => id !== componentId)
          return { recentlyViewed: [componentId, ...filtered].slice(0, 20) }
        }),

      updateQuizScore: (componentId, score) =>
        set((s) => ({
          quizScores: { ...s.quizScores, [componentId]: score },
        })),

      updateReadingProgress: (componentId, progress) =>
        set((s) => ({
          readingProgress: { ...s.readingProgress, [componentId]: progress },
        })),

      setSearchQuery: (searchQuery) => set({ searchQuery }),
    }),
    {
      name: 'electronics-hub-storage',
      partialize: (s) => ({
        theme: s.theme,
        textScale: s.textScale,
        bookmarks: s.bookmarks,
        recentlyViewed: s.recentlyViewed,
        quizScores: s.quizScores,
        readingProgress: s.readingProgress,
      }),
    }
  )
)

export default useStore
