import { create } from 'zustand';
import { fetchNewsByCategory } from '../../api/newsApi';
import { ThemeStore } from '../../types/theme';
import { NewsDataStore } from '../../types/data';
import { Category } from '../../types/category';

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
    console.log(get().theme);
  },
}));

export const useNewsDataStore = create<NewsDataStore>((set) => ({
  newsData: [],
  isLoading: false,
  isError: false,
  setNewsData: async (category: Category) => {
    set({ isLoading: true });
    try {
      const newsData = await fetchNewsByCategory(category);
      set({ newsData });
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
