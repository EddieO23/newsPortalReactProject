import React, { useEffect, useState } from 'react';
import { categories } from '../utils/constants';
import HeaderSection from './HeaderSection';
import { Box, Card, CardContent, Typography } from '@mui/material';
import NewsCard from './NewsCard';
import { getTopHeadlines } from '../utils/api';

function HomeCards({ category }) {
const [categoryNews, setCategoryNews] = useState([])

  const fetchCategoryNews = async () => {
    const response = await getTopHeadlines(category)
    // console.log("response", response);
    if(response.data) {
      const filterCategoryNews = response?.data?.articles.filter(
        (res) => res.urlToImage != null
      );
      setCategoryNews(filterCategoryNews)
    }
  };

  useEffect(() => {
    fetchCategoryNews();
  }, []);

  return (
    <Box>
      <HeaderSection title={category} />
      <NewsCard news={categoryNews} />
    </Box>
  );
}

export default HomeCards;
