import { CATEGORIES } from '../constants/categories';
import { Theme } from './theme';

export type Category = (typeof CATEGORIES)[number];

export interface CategoryBlockProps {
  category: Category;
  onClick: () => void;
  theme: Theme;
}
