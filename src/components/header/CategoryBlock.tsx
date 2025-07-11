import React from 'react';
import { Theme } from '../../types/theme';
import { styled } from 'styled-components';
import { LIGHT_COLORS, DARK_COLORS } from '../../constants/colors';
import { CategoryBlockProps } from '../../types/category';
import { useParams } from 'react-router-dom';

const CategoryBlockContainer = styled.div<{
  onClick: () => void;
  theme: Theme;
  $isSelected: boolean;
}>`
  flex: 1;
  display: flex;
  height: 80%;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  font-size: 1.4rem;
  font-weight: bold;
  justify-content: center;
  background-color: ${({ $isSelected, theme }) =>
    theme === 'light'
      ? $isSelected
        ? LIGHT_COLORS.primary
        : LIGHT_COLORS.background
      : $isSelected
        ? DARK_COLORS.primary
        : DARK_COLORS.background};

  color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.title : DARK_COLORS.title};
  cursor: pointer;
  border-left: 1px solid
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  background-image: linear-gradient(
    to top,
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary}
  );
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    background-size: 100% 100%;
  }
`;

export const CategoryBlock = ({
  category,
  onClick,
  theme,
}: CategoryBlockProps) => {
  const { category: selectedCategory } = useParams();
  return (
    <CategoryBlockContainer
      onClick={onClick}
      theme={theme}
      $isSelected={category === selectedCategory}
    >
      {category}
    </CategoryBlockContainer>
  );
};

export default CategoryBlock;
