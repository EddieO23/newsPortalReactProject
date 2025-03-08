import React from 'react';
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

function Carousel() {
  return (
    <Box>
      {/* HEADER */}
      <HeaderSection title='Top Headlines' />

      <CarouselCard/>

      {/* Caoursel List */}
<CarouselList/>
    </Box>
  );
}

export default Carousel;
