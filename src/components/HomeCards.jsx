import React from 'react';
import { categories } from '../utils/constants';
import HeaderSection from './HeaderSection';
import {Box, Card, CardContent, Typography } from '@mui/material';
import NewsCard from './NewsCard';

function HomeCards() {
  return (
    <Box>
      <Box className='mt-4'>
        <Box>
          {categories.map((item, indx) => (
            <Box>
              <HeaderSection title={item} />
              <NewsCard />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default HomeCards;
