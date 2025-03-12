import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getTopHeadlines } from '../utils/api';
import ExploreCardsList from '../components/ExploreCardsList';
import NewsCardSkeleton from '../components/Skeletons/NewsCardSkeleton';

function Explore() {
  const location = useLocation();
  const category = location.state?.category;

  const [categoryData, setCategoryData] = useState({});
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setError(null);
    setLoading(true);

    if (!category) return;

    const currentCategoryData = categoryData[category] || {
      articles: [],
      pageNumber: 1,
    };
    const pageNumber = currentCategoryData.pageNumber;

    try {
      const response = await getTopHeadlines(category, pageNumber);

      if (response.data) {
        const filterNews = response.data.articles.filter(
          (res) => res.urlToImage != null
        );

        setCategoryData((prev) => ({
          ...prev,
          [category]: {
            articles: [...(prev[category]?.articles || []), ...filterNews],
            pageNumber: pageNumber + 1,
          },
        }));
        setLoadMore(
          currentCategoryData.articles.length + filterNews.length <
            response.data.totalResults
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    // console.log(categoryData);
  }, [categoryData]);

  return (
    <Container maxWidth='false' sx={{ width: '90%', mt: 5, mb: 10 }}>
      <Typography
        variant='h4'
        sx={{ fontSize: {md: '2.25rem', xs: '1.5rem'}, fontFamily: 'serif', cursor: 'pointer', mb: 1 }}
      >
        {category}
      </Typography>
      {error && (
        <Typography color='error' sx={{ mb: 3 }}>
          {error}
        </Typography>
      )}

      {loading ? (
            <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
            {[...Array(20)].map((_, index) => (
                <NewsCardSkeleton key={index} />
              ))}
            </Box>
      ) : (
        <>
          {categoryData[category]?.articles?.length > 0 && (
            <ExploreCardsList list={categoryData[category]?.articles} />
          )}
          <Box display='flex' justifyContent='center' mt={3}>
            {loadMore && (
              <Button
                onClick={() => fetchNews()}
                sx={{ background: 'gray' }}
                variant='contained'
                disableElevation
              >
                Load more...
              </Button>
            )}
          </Box>
        </>
      )}
    </Container>
  );
}

export default Explore;
