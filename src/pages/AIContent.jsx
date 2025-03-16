import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';

function AIContent() {
  const [platform, setPlatform] = useState('');
  const [contentType, setContentType] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [tone, setTone] = useState('');

  const handleGenerate = () => {
    // 실제로는 AI API를 호출하여 컨텐츠를 생성합니다
    setGeneratedContent(
      '✨ 새로운 봄 메이크업 트렌드를 소개합니다! 🌸\n\n' +
      '올 봄 트렌드 컬러인 코랄 블러셔로 화사한 생기를 더해보세요.\n' +
      '자연스러운 글로우와 은은한 색감이 어우러져 봄처럼 산뜻한 메이크업이 완성됩니다.\n\n' +
      '#봄메이크업 #코랄메이크업 #트렌드메이크업 #뷰티'
    );
  };

  const recentPrompts = [
    {
      id: 1,
      prompt: '봄 메이크업 트렌드 소개',
      platform: 'Instagram',
      date: '2024-03-15',
    },
    {
      id: 2,
      prompt: '스킨케어 루틴 팁',
      platform: 'YouTube',
      date: '2024-03-14',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI 컨텐츠 생성
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>플랫폼</InputLabel>
                    <Select
                      value={platform}
                      label="플랫폼"
                      onChange={(e) => setPlatform(e.target.value)}
                    >
                      <MenuItem value="instagram">Instagram</MenuItem>
                      <MenuItem value="youtube">YouTube</MenuItem>
                      <MenuItem value="tiktok">TikTok</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>컨텐츠 유형</InputLabel>
                    <Select
                      value={contentType}
                      label="컨텐츠 유형"
                      onChange={(e) => setContentType(e.target.value)}
                    >
                      <MenuItem value="post">게시글</MenuItem>
                      <MenuItem value="caption">캡션</MenuItem>
                      <MenuItem value="hashtags">해시태그</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>톤앤매너</InputLabel>
                    <Select
                      value={tone}
                      label="톤앤매너"
                      onChange={(e) => setTone(e.target.value)}
                    >
                      <MenuItem value="friendly">친근한</MenuItem>
                      <MenuItem value="professional">전문적인</MenuItem>
                      <MenuItem value="casual">캐주얼한</MenuItem>
                      <MenuItem value="luxury">고급스러운</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="프롬프트 입력"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="예: 봄 메이크업 트렌드를 소개하는 게시글을 작성해주세요."
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    startIcon={<AutoAwesomeIcon />}
                    onClick={handleGenerate}
                    fullWidth
                  >
                    생성하기
                  </Button>
                </Grid>

                {generatedContent && (
                  <Grid item xs={12}>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        생성된 컨텐츠
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        value={generatedContent}
                        InputProps={{ readOnly: true }}
                      />
                      <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        <Button
                          variant="outlined"
                          startIcon={<SaveIcon />}
                        >
                          저장
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<ShareIcon />}
                        >
                          공유
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HistoryIcon sx={{ mr: 1 }} />
                <Typography variant="h6">최근 프롬프트</Typography>
              </Box>
              <List>
                {recentPrompts.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemAvatar>
                      <Avatar>
                        <AutoAwesomeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.prompt}
                      secondary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Chip
                            label={item.platform}
                            size="small"
                            color="primary"
                          />
                          <Typography variant="caption">
                            {item.date}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                프롬프트 팁
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body2" paragraph>
                • 구체적인 목표와 타겟 고객을 명시하세요
              </Typography>
              <Typography variant="body2" paragraph>
                • 원하는 톤앤매너를 자세히 설명하세요
              </Typography>
              <Typography variant="body2" paragraph>
                • 핵심 키워드를 포함시키세요
              </Typography>
              <Typography variant="body2">
                • 컨텐츠의 길이나 형식을 지정하세요
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AIContent; 