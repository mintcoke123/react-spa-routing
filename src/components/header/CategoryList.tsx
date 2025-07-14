import React from 'react';
import { styled } from 'styled-components';
import CategoryBlock from './CategoryBlock';
import { CATEGORIES } from '../../constants/categories';
import { useNavigate } from 'react-router-dom';

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 6rem;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
`;

const CategoryList = () => {
  const navigate = useNavigate();
  return (
    <>
      <CategoryContainer>
        {CATEGORIES.map((category) => (
          <CategoryBlock
            key={category}
            onClick={() => navigate(`/${category}`)}
            category={category}
          />
        ))}
      </CategoryContainer>
    </>
  );
};

export default CategoryList;
