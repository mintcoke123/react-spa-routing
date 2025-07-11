import { Article } from './article';
import { Category } from './category';

export interface NewsDataStore {
  newsData: Article[];
  setNewsData: (category: Category) => Promise<void>;
  isLoading: boolean;
  isError: boolean;
}
