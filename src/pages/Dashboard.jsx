import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const performanceData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '캠페인 성과',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const engagementData = {
    labels: ['Instagram', 'YouTube', 'TikTok', 'Facebook'],
    datasets: [
      {
        label: '플랫폼별 참여율',
        data: [65, 59, 80, 81],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const recentCampaigns = [
    {
      name: '2024 봄 메이크업 캠페인',
      status: '진행중',
      progress: 75,
      budget: 5000000,
      spent: 3750000,
    },
    {
      name: '스킨케어 제품 런칭',
      status: '완료',
      progress: 100,
      budget: 3000000,
      spent: 3000000,
    },
  ];

  const topInfluencers = [
    {
      name: '김뷰티',
      platform: 'Instagram',
      followers: 30000,
      engagement: 4.8,
      image: 'https://via.placeholder.com/150',
    },
    {
      name: '이메이크',
      platform: 'YouTube',
      followers: 25000,
      engagement: 4.6,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        대시보드
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TrendingUpIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">캠페인 성과</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                85%
              </Typography>
              <Typography color="textSecondary">
                목표 대비 달성률
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CampaignIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">활성 캠페인</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                3
              </Typography>
              <Typography color="textSecondary">
                진행중인 캠페인 수
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">총 인플루언서</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                150
              </Typography>
              <Typography color="textSecondary">
                등록된 인플루언서 수
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MonetizationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">총 예산</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                8,000만원
              </Typography>
              <Typography color="textSecondary">
                이번 달 예산
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                캠페인 성과 추이
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={performanceData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                플랫폼별 참여율
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={engagementData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                최근 캠페인
              </Typography>
              <List>
                {recentCampaigns.map((campaign) => (
                  <ListItem key={campaign.name}>
                    <ListItemText
                      primary={campaign.name}
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="textSecondary">
                            예산: {campaign.budget.toLocaleString()}원
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            지출: {campaign.spent.toLocaleString()}원
                          </Typography>
                          <LinearProgress
                            variant="determinate"
                            value={campaign.progress}
                            sx={{ mt: 1 }}
                          />
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                인기 인플루언서
              </Typography>
              <List>
                {topInfluencers.map((influencer) => (
                  <ListItem key={influencer.name}>
                    <ListItemAvatar>
                      <Avatar src={influencer.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={influencer.name}
                      secondary={`${influencer.platform} • ${influencer.followers.toLocaleString()} 팔로워`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard; 