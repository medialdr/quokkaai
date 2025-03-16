import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          뷰티 인플루언서 플랫폼
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/ranking"
            startIcon={<TrendingUpIcon />}
          >
            인플루언서 랭킹
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/analytics"
            startIcon={<AnalyticsIcon />}
          >
            광고 분석
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/ai-content"
            startIcon={<AutoAwesomeIcon />}
          >
            AI 컨텐츠
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/trends"
            startIcon={<TimelineIcon />}
          >
            트렌드 분석
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/settings"
            startIcon={<SettingsIcon />}
          >
            설정
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 