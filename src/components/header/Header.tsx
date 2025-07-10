import React from 'react';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
`;

const CategoryBlock = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  width: 100%;
  margin: 0 0.1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: blue;
  text-align: center;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <CategoryBlock>category1</CategoryBlock>
      <CategoryBlock>category2</CategoryBlock>
      <CategoryBlock>category3</CategoryBlock>
      <CategoryBlock>category4</CategoryBlock>
      <CategoryBlock>category5</CategoryBlock>
    </HeaderContainer>
  );
};

export default Header;
