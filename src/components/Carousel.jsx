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

function Carousel() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [active, setActive] = useState(0);

  const fetchTopHeadlines = async () => {
    const response = await getTopHeadlines();
    console.log(response);

    if (response.data) {
      const filterHeadlines = response.data?.articles.filter(
        (res) => res.urlToImage != null
      );
      setTopHeadlines(filterHeadlines);
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

      <CarouselCard
        toggleActive={toggleActive}
        topHeadline={topHeadlines[active]}
      />

      {/* Caoursel List */}
      <CarouselList active={active} topHeadline={topHeadlines} />
    </Box>
  );
}

export default Carousel;
