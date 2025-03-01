import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter as Router } from 'react-router-dom'; // ✅ Correct import
import PlayerContextProvider from './context/PlayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ Use Router instead of BrowserRouter */}
    <Router>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </Router>
  </StrictMode>
);
