import React from 'react';
import styled from 'styled-components';
import { useThemeStore } from '../store/store';
import lightMode from '../../assets/lightMode.png';
import darkMode from '../../assets/darkMode.png';

const ThemeButton = styled.button`
  position: fixed;
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1.5rem;
  top: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <ThemeButton onClick={toggleTheme}>
      <img
        src={theme === 'light' ? lightMode : darkMode}
        alt="theme"
        width="100%"
        height="auto"
      />
    </ThemeButton>
  );
};

export default ToggleButton;
