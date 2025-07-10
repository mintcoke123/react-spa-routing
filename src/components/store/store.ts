import { create } from 'zustand';
import { fetchNewsByCategory } from '../../api/newsApi';
import { Article } from '../../types/article';
import { Category } from '../../types/category';
import { ThemeStore } from '../../types/theme';

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    }));
    console.log(get().theme);
  },
}));

interface NewsDataStore {
  newsData: Article[];
  setNewsData: (category: Category) => Promise<void>;
  isLoading: boolean;
}

export const useNewsDataStore = create<NewsDataStore>((set) => ({
  newsData: [],
  isLoading: false,
  setNewsData: async (category: Category) => {
    set({ isLoading: true });
    try {
      const newsData = await fetchNewsByCategory(category);
      set({ newsData });
    } catch (error) {
      console.error('뉴스 데이터 가져오기 실패', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
