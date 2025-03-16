import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TimelineIcon from '@mui/icons-material/Timeline';
import CategoryIcon from '@mui/icons-material/Category';

function TrendAnalysis() {
  const [timeRange, setTimeRange] = useState('month');

  const trendData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [
      {
        label: '스킨케어',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: '메이크업',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: '헤어',
        data: [45, 30, 50, 60, 45, 35],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const categoryData = {
    labels: ['스킨케어', '메이크업', '헤어', '네일', '바디케어'],
    datasets: [
      {
        label: '카테고리별 관심도',
        data: [35, 25, 20, 10, 10],
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

  const hotTopics = [
    {
      keyword: '글로우 메이크업',
      growth: '+125%',
      category: '메이크업',
      related: ['데일리 메이크업', '촉촉 메이크업'],
    },
    {
      keyword: '저자극 스킨케어',
      growth: '+85%',
      category: '스킨케어',
      related: ['민감성 피부', '진정 케어'],
    },
    {
      keyword: '헤어 오일',
      growth: '+65%',
      category: '헤어',
      related: ['트리트먼트', '데미지 케어'],
    },
  ];

  const upcomingTrends = [
    {
      trend: '비건 뷰티',
      prediction: '3개월 내 급성장 예상',
      confidence: 85,
    },
    {
      trend: '클린 뷰티',
      prediction: '6개월 내 주류화 예상',
      confidence: 75,
    },
    {
      trend: '맞춤형 화장품',
      prediction: '1년 내 시장 확대 예상',
      confidence: 90,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          트렌드 분석
        </Typography>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>기간 선택</InputLabel>
          <Select
            value={timeRange}
            label="기간 선택"
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <MenuItem value="week">최근 1주일</MenuItem>
            <MenuItem value="month">최근 1개월</MenuItem>
            <MenuItem value="quarter">최근 3개월</MenuItem>
            <MenuItem value="year">최근 1년</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                카테고리별 트렌드 추이
              </Typography>
              <Box sx={{ height: 400 }}>
                <Line data={trendData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                카테고리 분포
              </Typography>
              <Box sx={{ height: 400 }}>
                <Bar data={categoryData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WhatshotIcon sx={{ mr: 1, color: 'error.main' }} />
                <Typography variant="h6">인기 키워드</Typography>
              </Box>
              <List>
                {hotTopics.map((topic) => (
                  <React.Fragment key={topic.keyword}>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUpIcon color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {topic.keyword}
                            <Chip
                              label={topic.growth}
                              color="success"
                              size="small"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                        }
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Chip
                              label={topic.category}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            {topic.related.map((tag) => (
                              <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                variant="outlined"
                                sx={{ mr: 1 }}
                              />
                            ))}
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <TimelineIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">예상 트렌드</Typography>
              </Box>
              <List>
                {upcomingTrends.map((trend) => (
                  <React.Fragment key={trend.trend}>
                    <ListItem>
                      <ListItemIcon>
                        <CategoryIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={trend.trend}
                        secondary={
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="textSecondary">
                              {trend.prediction}
                            </Typography>
                            <Chip
                              label={`신뢰도 ${trend.confidence}%`}
                              color="primary"
                              size="small"
                              sx={{ mt: 1 }}
                            />
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TrendAnalysis; 