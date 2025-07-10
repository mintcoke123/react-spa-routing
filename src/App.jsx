import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/general" replace />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
