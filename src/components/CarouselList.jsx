import React from 'react';
import { Box, Grid2, Typography, Card, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function CarouselList({ topHeadline, active }) {
  const getNextFive = (active, topHeadline) => {
    const nextFive = [];

    for (let i = 0; i < 5; i++) {
      const index = (active + i + 1) % topHeadline.length;
      nextFive.push(index);
    }

    return nextFive;
  };

  const nextFiveHeadlines = getNextFive(active, topHeadline);

  return (
    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-8'>
      {nextFiveHeadlines.map((item, index) => (
        <Grid2 key={index}>
          <Link to={topHeadline[item]?.url}>
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
                className='absolute bottom-2 text-white md:text-[17px] sm:text-[15px] text-[14px] line-clamp-3 px-6'
              >
                {topHeadline[item]?.title}
              </Typography>
            </Card>
          </Link>
        </Grid2>
      ))}
    </Box>
  );
}

export default CarouselList;
