import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';
import HeaderSection from './HeaderSection';
import CarouselCard from './CarouselCard';
import CarouselList from './CarouselList';
import axios from 'axios';
import { getTopHeadlines } from '../utils/api';
import CarouselCardSkeleton from './Skeletons/CarouselCardSkeleton';
import CarouselListSkeleton from './Skeletons/CarouselListSkeleton';

function Carousel() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [active, setActive] = useState(0);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTopHeadlines = async () => {
    setLoading(true);
    setError(null);

    const response = await getTopHeadlines();
    console.log(response);

    if (response.data) {
      const filterHeadlines = response.data?.articles.filter(
        (res) => res.urlToImage != null
      );
      setTopHeadlines(filterHeadlines);
      setLoading(false);
    }

    if (response.error) {
      setError(response.error.message || 'Failed to fetch...');
    }
  };

  const toggleActive = (direction) => {
    if (direction === 'next') {
      setActive((prev) => (prev + 1) % topHeadlines.length);
    } else if (direction === 'prev') {
      setActive(
        (prev) => (prev - 1 + topHeadlines.length) % topHeadlines.length
      );
    }
  };

  useEffect(() => {
    fetchTopHeadlines();
  }, []);
  return (
    <Box>
      {/* HEADER */}
      <HeaderSection title='Top Headlines' />

      {error ? (
        <Typography color='error'>{error}</Typography>
      ) : loading ? (
        <>
          <CarouselCardSkeleton />
          <CarouselListSkeleton  />
        </>
      ) : (
        <Box>
          <CarouselCard
            toggleActive={toggleActive}
            topHeadline={topHeadlines[active]}
          />
          <CarouselList active={active} topHeadline={topHeadlines} />
        </Box>
      )}
    </Box>
  );
}

export default Carousel;
