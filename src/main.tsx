import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import { ExplorePage } from './components/explore/ExplorePage';
import HobbyDetailsPage from './components/hobby/HobbyDetailsPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/hobby/:hobbyName" element={<HobbyDetailsPage />} />
      </Routes>
    </Router>
  </StrictMode>
);
