import React from 'react';
import { Box, Grid2, Typography, Card, CardMedia } from '@mui/material';



function CarouselList({ topHeadline, active }) {


  const getNextFive = (active, topHeadline) => {
      const nextFive = []
      
      for (let i =0; i < 5; i++ ){
        const index = (active + i + 1) %topHeadline.length
        nextFive.push(index)
      }

      return nextFive
}

const nextFiveHeadlines = getNextFive(active, topHeadline)


  return (
    <Box className='grid grid-cols-5 gap-3 mt-8'>
      {nextFiveHeadlines.map((item, index) => (
        <Grid2 key={index}>
          <Card className='relative'>
            {/* <Box className='bg-red-300 w-full aspect-[16/10]'></Box> */}
            <CardMedia
              component='img'
              className='w-full aspect-[16/9]'
              image={topHeadline[item]?.urlToImage}
            />
            <Box
              className='_carouselGradient'
              sx={{
                position: 'absolute',
                bottom: 0,
                height: '70px',
                width: '100%',
              }}
            />
            <Typography
              sx={{ fontFamily: 'serif', fontSize: '17px' }}
              className='absolute bottom-2 text-white line-clamp-3 px-6'
            >
              {topHeadline[item]?.title}
            </Typography>
          </Card>
        </Grid2>
      ))}
    </Box>
  );
}

export default CarouselList;
