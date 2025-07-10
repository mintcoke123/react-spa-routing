import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from '../constants/numbers';

export const isLongDescription = (description: string) => {
  return description.length > MAX_DESCRIPTION_LENGTH;
};

export const getShorterDescription = (description: string) => {
  return description.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
};

export const isLongTitle = (title: string) => {
  return title.length > MAX_TITLE_LENGTH;
};

export const getShorterTitle = (title: string) => {
  return title.slice(0, MAX_TITLE_LENGTH) + '...';
};
