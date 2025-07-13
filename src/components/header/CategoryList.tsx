import React from 'react';
import { LIGHT_COLORS } from '../../constants/colors';
import { DARK_COLORS } from '../../constants/colors';
import { Theme } from '../../types/theme';
import { styled } from 'styled-components';
import { CategoryBlock } from './CategoryBlock';
import { CATEGORIES } from '../../constants/categories';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../store/store';

const CategoryContainer = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 6rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
  border: 1px solid
    ${({ theme }) =>
      theme === 'light' ? LIGHT_COLORS.primary : DARK_COLORS.primary};
`;

const CategoryList = () => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <>
      <CategoryContainer theme={theme}>
        {CATEGORIES.map((category) => (
          <CategoryBlock
            key={category}
            onClick={() => navigate(`/${category}`)}
            theme={theme}
            category={category}
          />
        ))}
      </CategoryContainer>
    </>
  );
};

export default CategoryList;
