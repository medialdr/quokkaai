import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Switch,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SaveIcon from '@mui/icons-material/Save';

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    language: 'ko',
    dataRetention: '6months',
    apiKey: '••••••••••••••••',
    reportFrequency: 'weekly',
    darkMode: false,
    autoSave: true,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (setting, value) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // 실제로는 API를 통해 설정을 저장합니다
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        설정
      </Typography>

      {saved && (
        <Alert severity="success" sx={{ mb: 2 }}>
          설정이 성공적으로 저장되었습니다.
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NotificationsIcon sx={{ mr: 1 }} />
                <Typography variant="h6">알림 설정</Typography>
              </Box>
              <List>
                <ListItem>
                  <ListItemText
                    primary="이메일 알림"
                    secondary="캠페인 결과 및 주요 업데이트"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={settings.emailNotifications}
                      onChange={(e) =>
                        handleChange('emailNotifications', e.target.checked)
                      }
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="푸시 알림"
                    secondary="실시간 트렌드 및 인사이트"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={settings.pushNotifications}
                      onChange={(e) =>
                        handleChange('pushNotifications', e.target.checked)
                      }
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SecurityIcon sx={{ mr: 1 }} />
                <Typography variant="h6">보안 설정</Typography>
              </Box>
              <TextField
                fullWidth
                label="API 키"
                type="password"
                value={settings.apiKey}
                onChange={(e) => handleChange('apiKey', e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button variant="outlined" color="primary">
                API 키 재발급
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LanguageIcon sx={{ mr: 1 }} />
                <Typography variant="h6">일반 설정</Typography>
              </Box>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>언어</InputLabel>
                <Select
                  value={settings.language}
                  label="언어"
                  onChange={(e) => handleChange('language', e.target.value)}
                >
                  <MenuItem value="ko">한국어</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="ja">日本語</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>리포트 주기</InputLabel>
                <Select
                  value={settings.reportFrequency}
                  label="리포트 주기"
                  onChange={(e) => handleChange('reportFrequency', e.target.value)}
                >
                  <MenuItem value="daily">매일</MenuItem>
                  <MenuItem value="weekly">매주</MenuItem>
                  <MenuItem value="monthly">매월</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DataUsageIcon sx={{ mr: 1 }} />
                <Typography variant="h6">데이터 설정</Typography>
              </Box>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>데이터 보관 기간</InputLabel>
                <Select
                  value={settings.dataRetention}
                  label="데이터 보관 기간"
                  onChange={(e) => handleChange('dataRetention', e.target.value)}
                >
                  <MenuItem value="3months">3개월</MenuItem>
                  <MenuItem value="6months">6개월</MenuItem>
                  <MenuItem value="1year">1년</MenuItem>
                  <MenuItem value="forever">영구</MenuItem>
                </Select>
              </FormControl>
              <List>
                <ListItem>
                  <ListItemText
                    primary="다크 모드"
                    secondary="어두운 테마 사용"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={settings.darkMode}
                      onChange={(e) => handleChange('darkMode', e.target.checked)}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="자동 저장"
                    secondary="변경사항 자동 저장"
                  />
                  <ListItemSecondaryAction>
                    <Switch
                      edge="end"
                      checked={settings.autoSave}
                      onChange={(e) => handleChange('autoSave', e.target.checked)}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              size="large"
            >
              설정 저장
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Settings; 