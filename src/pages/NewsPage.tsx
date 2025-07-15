import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../types/category';
import Header from '../components/header/Header';
import { styled, ThemeProvider } from 'styled-components';
import { useNewsDataStore, useThemeStore } from '../components/store/store';
import Main from '../components/main/Main';
import ToggleButton from '../components/theme/toggleButton';
import { lightTheme, darkTheme } from '../styles/theme';

const NewsPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

export default function NewsPage() {
  const { theme } = useThemeStore();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  const { category } = useParams<{ category: Category }>();
  const { setNewsData } = useNewsDataStore();
  useEffect(() => {
    if (!category) return;

    setNewsData(category);
  }, [category, setNewsData]);

  return (
    <ThemeProvider theme={currentTheme}>
      <NewsPageContainer>
        <ToggleButton />
        <Header />
        <Main />
      </NewsPageContainer>
    </ThemeProvider>
  );
}
