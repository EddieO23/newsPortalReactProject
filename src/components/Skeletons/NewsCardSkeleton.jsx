import React from 'react';
import {
  Skeleton,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function NewsCardSkeleton() {
  return (
    <Card className='relative shadow-none border-2 h-[450px]'>
      {/* <Box className='bg-red-300 w-full aspect-[16/9] h-[180px]' /> */}
      <Skeleton variant='rectangular'>
        <Box className='aspect-[16/9] h-[180px]'></Box>
      </Skeleton>
      <CardContent className='mb-12'>
        <Skeleton />
        <Skeleton />
        <Skeleton className='mt-2' />
        <Skeleton className='w-[60%]' />
      </CardContent>
    </Card>
  );
}

export default NewsCardSkeleton;
