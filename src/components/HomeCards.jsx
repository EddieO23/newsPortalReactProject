import React, { useEffect, useState } from 'react';
import { categories } from '../utils/constants';
import HeaderSection from './HeaderSection';
import { Box, Card, CardContent, Typography } from '@mui/material';
import NewsCard from './NewsCard';
import { getTopHeadlines } from '../utils/api';
import NewsCardSkeleton from './Skeletons/NewsCardSkeleton';

function HomeCards({ category }) {
  const [categoryNews, setCategoryNews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCategoryNews = async () => {
    setLoading(true);
    setError(null);

    const response = await getTopHeadlines(category);
    // console.log("response", response);
    if (response.data) {
      const filterCategoryNews = response?.data?.articles.filter(
        (res) => res.urlToImage != null
      );
      setCategoryNews(filterCategoryNews);
      setLoading(false);
    }

    if (response.error) {
      setError(response.error.message || 'Failed to fetch...');
    }
  };

  useEffect(() => {
    fetchCategoryNews();
  }, []);

  return (
    <>
      <HeaderSection title={category} />
      {error ? (
        <Typography color='error' className=''>
          {error}
        </Typography>
      ) : (
        <>
          {loading ? (
            <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
              {[...Array(5)].map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))}
            </Box>
          ) : (
              <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
                {categoryNews.slice(0, 5).map((item, indx) => (
                  <NewsCard key={indx} item={item} />
                ))}
              </Box>
          )}
        </>
      )}
    </>
  );
}

export default HomeCards;
