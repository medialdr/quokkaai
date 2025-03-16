import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function CampaignAnalytics() {
  const [selectedCampaign, setSelectedCampaign] = useState('1');

  const campaigns = [
    { id: '1', name: '2024 봄 메이크업 캠페인' },
    { id: '2', name: '스킨케어 제품 런칭' },
  ];

  const performanceData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '도달률',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: '참여율',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  const platformData = {
    labels: ['Instagram', 'YouTube', 'TikTok', 'Facebook'],
    datasets: [
      {
        label: '플랫폼별 성과',
        data: [30, 25, 25, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const demographicData = {
    labels: ['10대', '20대', '30대', '40대', '50대 이상'],
    datasets: [
      {
        label: '연령대별 참여율',
        data: [15, 35, 25, 15, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const influencerPerformance = [
    {
      name: '김뷰티',
      platform: 'Instagram',
      reach: 150000,
      engagement: 4.8,
      conversion: 2.5,
      roi: 350,
    },
    {
      name: '메이크업하는이루리',
      platform: 'YouTube',
      reach: 120000,
      engagement: 5.2,
      conversion: 3.1,
      roi: 420,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          광고 분석
        </Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>캠페인 선택</InputLabel>
          <Select
            value={selectedCampaign}
            label="캠페인 선택"
            onChange={(e) => setSelectedCampaign(e.target.value)}
          >
            {campaigns.map((campaign) => (
              <MenuItem key={campaign.id} value={campaign.id}>
                {campaign.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MonetizationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">총 지출</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                5,000만원
              </Typography>
              <Typography color="textSecondary">
                예산 대비 75% 사용
              </Typography>
              <LinearProgress variant="determinate" value={75} sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">도달</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                150만
              </Typography>
              <Typography color="textSecondary">
                전월 대비 +15%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ThumbUpIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">참여율</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                4.8%
              </Typography>
              <Typography color="textSecondary">
                목표 대비 120%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ShareIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">전환율</Typography>
              </Box>
              <Typography variant="h4" gutterBottom>
                2.5%
              </Typography>
              <Typography color="textSecondary">
                전월 대비 +0.5%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                성과 추이
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
                플랫폼별 분포
              </Typography>
              <Box sx={{ height: 300 }}>
                <Doughnut data={platformData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                연령대별 참여율
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={demographicData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                인플루언서별 성과
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>인플루언서</TableCell>
                      <TableCell>플랫폼</TableCell>
                      <TableCell align="right">도달</TableCell>
                      <TableCell align="right">참여율</TableCell>
                      <TableCell align="right">전환율</TableCell>
                      <TableCell align="right">ROI</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {influencerPerformance.map((influencer) => (
                      <TableRow key={influencer.name}>
                        <TableCell>{influencer.name}</TableCell>
                        <TableCell>{influencer.platform}</TableCell>
                        <TableCell align="right">
                          {influencer.reach.toLocaleString()}
                        </TableCell>
                        <TableCell align="right">{influencer.engagement}%</TableCell>
                        <TableCell align="right">{influencer.conversion}%</TableCell>
                        <TableCell align="right">{influencer.roi}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CampaignAnalytics; 