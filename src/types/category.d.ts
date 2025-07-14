import { CATEGORIES } from '../constants/categories';

export type Category = (typeof CATEGORIES)[number];

export interface CategoryBlockProps {
  category: Category;
  onClick: () => void;
}
