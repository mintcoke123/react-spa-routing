import { Article } from '../types/article';

export const isValidArticle = (article: unknown): article is Article => {
  return (
    typeof article === 'object' &&
    article !== null &&
    typeof (article as Article).url === 'string' &&
    typeof (article as Article).title === 'string' &&
    typeof (article as Article).description === 'string' &&
    typeof (article as Article).urlToImage === 'string'
  );
};
