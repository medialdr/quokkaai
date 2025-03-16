import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function InfluencerRanking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState('all');
  const [category, setCategory] = useState('all');

  const influencers = [
    {
      id: 1,
      name: '김뷰티',
      image: 'https://via.placeholder.com/40',
      platform: 'Instagram',
      followers: 1500000,
      engagement: 4.8,
      category: '스킨케어',
      trend: 'up',
      recentPosts: 45,
      avgLikes: 25000,
    },
    {
      id: 2,
      name: '메이크업하는이루리',
      image: 'https://via.placeholder.com/40',
      platform: 'YouTube',
      followers: 1200000,
      engagement: 5.2,
      category: '메이크업',
      trend: 'up',
      recentPosts: 32,
      avgLikes: 30000,
    },
    {
      id: 3,
      name: '헤어스타일러제니',
      image: 'https://via.placeholder.com/40',
      platform: 'TikTok',
      followers: 800000,
      engagement: 3.9,
      category: '헤어',
      trend: 'down',
      recentPosts: 28,
      avgLikes: 15000,
    },
  ];

  const filteredInfluencers = influencers.filter((influencer) => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platform === 'all' || influencer.platform === platform;
    const matchesCategory = category === 'all' || influencer.category === category;
    return matchesSearch && matchesPlatform && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        인플루언서 랭킹
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="인플루언서 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>플랫폼</InputLabel>
            <Select
              value={platform}
              label="플랫폼"
              onChange={(e) => setPlatform(e.target.value)}
            >
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="Instagram">Instagram</MenuItem>
              <MenuItem value="YouTube">YouTube</MenuItem>
              <MenuItem value="TikTok">TikTok</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>카테고리</InputLabel>
            <Select
              value={category}
              label="카테고리"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="all">전체</MenuItem>
              <MenuItem value="스킨케어">스킨케어</MenuItem>
              <MenuItem value="메이크업">메이크업</MenuItem>
              <MenuItem value="헤어">헤어</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>순위</TableCell>
              <TableCell>인플루언서</TableCell>
              <TableCell>플랫폼</TableCell>
              <TableCell align="right">팔로워</TableCell>
              <TableCell align="right">참여율</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell align="right">최근 게시물</TableCell>
              <TableCell align="right">평균 좋아요</TableCell>
              <TableCell>추세</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInfluencers.map((influencer, index) => (
              <TableRow key={influencer.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={influencer.image} sx={{ mr: 2 }} />
                    {influencer.name}
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={influencer.platform} size="small" />
                </TableCell>
                <TableCell align="right">
                  {influencer.followers.toLocaleString()}
                </TableCell>
                <TableCell align="right">{influencer.engagement}%</TableCell>
                <TableCell>{influencer.category}</TableCell>
                <TableCell align="right">{influencer.recentPosts}</TableCell>
                <TableCell align="right">
                  {influencer.avgLikes.toLocaleString()}
                </TableCell>
                <TableCell>
                  {influencer.trend === 'up' ? (
                    <TrendingUpIcon color="success" />
                  ) : (
                    <TrendingDownIcon color="error" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default InfluencerRanking; 