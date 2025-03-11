import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getTopHeadlines } from '../utils/api';
import ExploreCardsList from '../components/ExploreCardsList';

function Explore() {
  const location = useLocation();
  // The useLocation hook in React is a part of the React Router library. It returns the current location object, which contains information about the current URL, including the pathname, search parameters, and hash.
  const category = location.state?.category;

  const [categoryData, setCategoryData] = useState({});
  const [loadMore, setLoadMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setError(null);
    setLoading(true);

    const currentCategoryData = categoryData[category] || {
      articles: [],
      pageNumber: 1,
    };
    const pageNumber = currentCategoryData.pageNumber;
    if (!category) return;

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
      setLoading(false);
    }
  };

  if (response.error) {
    setError(response.error.message);
    setLoading(false);
  }
  // In short, this function fetches news articles based on a specified category, filters out those without images, and updates the state with the valid articles. If no category is provided, it simply stops execution.

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    console.log(categoryData);
  }, [categoryData]);

  return (
    <Container maxWidth='false' sx={{ width: '90%', mt: 5, mb: 10 }}>
      <Typography
        variant='h4'
        sx={{ fontFamily: 'serif', cursor: 'pointer', mb: 1 }}
      >
        {category}
      </Typography>
      {error && (
        <Typography color='error' sx={{ mb: 3 }}>
          {error}
        </Typography>
      )}

      {loading ? (
        <Typography sx={{ mb: 3 }}>Loading...</Typography>
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
