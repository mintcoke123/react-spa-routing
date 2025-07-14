import React from 'react';
import { styled } from 'styled-components';
import { CategoryBlockProps } from '../../types/category';
import { useParams } from 'react-router-dom';

const CategoryBlockContainer = styled.div<{
  onClick: () => void;
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
    $isSelected ? theme.primary : theme.background};

  color: ${({ theme }) => theme.title};
  cursor: pointer;
  border-left: 1px solid ${({ theme }) => theme.primary};
  background-image: linear-gradient(to top, ${({ theme }) => theme.primary});
  background-size: 100% 0%;
  background-repeat: no-repeat;
  background-position: bottom;
  transition: background-size 0.3s ease-in-out;

  &:hover {
    background-size: 100% 100%;
  }
`;

const CategoryBlock = ({ category, onClick }: CategoryBlockProps) => {
  const { category: selectedCategory } = useParams();
  return (
    <CategoryBlockContainer
      onClick={onClick}
      $isSelected={category === selectedCategory}
    >
      {category}
    </CategoryBlockContainer>
  );
};

export default CategoryBlock;
