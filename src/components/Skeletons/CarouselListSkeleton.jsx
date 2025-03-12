import React from 'react';
import { Box, Grid2, Card , Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

function CarouselListSkeleton() {
  return (
    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8'>
      {[...Array(5)].map((item, index) => (
        <Grid2 key={index}>
            <Card className='relative'>
              {/* <Box className='bg-red-300 w-full aspect-[16/10]'></Box> */}
              <Skeleton variant='rectangular' width={'100%'}>
              <Box className="aspect-[16/9]"></Box>
              </Skeleton>
            </Card>
        </Grid2>
      ))}
    </Box>
  );
}

export default CarouselListSkeleton;
