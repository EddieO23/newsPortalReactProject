import React from 'react';
import { Box, Typography, Card, CardContent, Skeleton } from '@mui/material';

function CarouselCardSkeleton() {
  return (
    // Carousel
    <Box className='relative'>
      <Card className='grid lg:grid-cols-2 md:grid-cols-3 border-2 shadow-none'>
        <Box className='relative md:h-[360px] h-[280px] lg:col-span-1 md:col-span-2'>
          {/* <Box className='bg-red-300 h-full'></Box> */}
          <Skeleton variant='rectangular' height={'100%'} />
        </Box>
        {/* Details */}

        <CardContent className='relative'>
          <Skeleton />
          <Skeleton />
          <Skeleton className='mt-2' />
          <Skeleton width='60%' />

        </CardContent>
      </Card>
    </Box>
  );
}

export default CarouselCardSkeleton;
