import { create } from 'zustand';
import { fetchNewsByCategory } from '../../api/newsApi';
import { Theme, ThemeStore } from '../../types/theme';
import { NewsDataStore } from '../../types/data';
import { Category } from '../../types/category';

const currentTheme = (localStorage.getItem('theme') as Theme) || 'light';

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: currentTheme,
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    });
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
