import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './NewsCard';
import NewsCardSkeleton from './Skeletons/NewsCardSkeleton';

function ExploreCardsList({ list, loading }) {
  return (
    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
      {list?.map((item, index) => (
          <NewsCard key={index} item={item} />
      ))}
      {
        loading && 
        [...Array(10)].map((_,index)=>(
          <NewsCardSkeleton key={index}/>
        ))
      }
    </Box>
  );
}

export default ExploreCardsList;
