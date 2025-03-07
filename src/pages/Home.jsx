import React from 'react';
import { Box, Button, Typography, Card, CardContent, Grid2 } from '@mui/material';
import { ArrowBigRight } from 'lucide-react';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }}>
     <Carousel/>
    </Box>
  );
}

export default Home;
