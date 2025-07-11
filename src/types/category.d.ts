import { categories } from '../constants/categories';
import { Theme } from './theme';

export type Category = (typeof categories)[number];

export interface CategoryBlockProps {
  category: Category;
  onClick: () => void;
  theme: Theme;
}
