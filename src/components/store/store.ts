import { create } from 'zustand';
import { fetchNewsByCategory } from '../../api/newsApi';
import { ThemeStore } from '../../types/theme';
import { NewsDataStore } from '../../types/data';
import { Category } from '../../types/category';
import { persist } from 'zustand/middleware';

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        }));
      },
    }),
    {
      name: 'theme',
    },
  ),
);

export const useNewsDataStore = create<NewsDataStore>((set) => ({
  newsData: [],
  isLoading: false,
  isError: false,
  setNewsData: async (category: Category) => {
    set({ isLoading: true });
    try {
      const newsData = await fetchNewsByCategory(category);
      set({ newsData });
    } catch {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
