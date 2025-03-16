import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import InfluencerRanking from './pages/InfluencerRanking';
import CampaignAnalytics from './pages/CampaignAnalytics';
import AIContent from './pages/AIContent';
import TrendAnalysis from './pages/TrendAnalysis';
import Settings from './pages/Settings';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF69B4',
    },
    secondary: {
      main: '#FFB6C1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ranking" element={<InfluencerRanking />} />
          <Route path="/analytics" element={<CampaignAnalytics />} />
          <Route path="/ai-content" element={<AIContent />} />
          <Route path="/trends" element={<TrendAnalysis />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
