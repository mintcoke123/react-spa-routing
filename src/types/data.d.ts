import { Article } from './article';
import { Category } from './category';

interface NewsDataStore {
  newsData: Article[];
  setNewsData: (category: Category) => Promise<void>;
  isLoading: boolean;
}
