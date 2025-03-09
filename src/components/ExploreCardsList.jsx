import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard';

function ExploreCardsList({ list }) {
  return (
    <Box className='grid grid-cols-5 gap-3'>
      {list?.map((item, index) => (
          <NewsCard key={index} item={item} />
      ))}
    </Box>
  );
}

export default ExploreCardsList;
