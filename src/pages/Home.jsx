import React from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';
import { ArrowBigRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import HeaderSection from '../components/HeaderSection';
import { categories } from '../utils/constants';
import HomeCards from '../components/HomeCards';

function Home() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }}>
      <Carousel />
      <HomeCards/>
      
    </Box>
  );
}

export default Home;
