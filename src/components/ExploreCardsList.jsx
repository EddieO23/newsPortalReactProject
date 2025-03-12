import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard';

function ExploreCardsList({ list }) {
  return (
    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
      {list?.map((item, index) => (
          <NewsCard key={index} item={item} />
      ))}
    </Box>
  );
}

export default ExploreCardsList;
