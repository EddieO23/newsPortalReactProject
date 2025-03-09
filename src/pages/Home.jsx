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
      <Box className='my-4 mb-24'>
        <Box>
          {categories.map((item, indx) => (
            <HomeCards key={indx} category={item}/>
          ))}
        </Box>
      </Box>
      
    </Box>
  );
}

export default Home;
