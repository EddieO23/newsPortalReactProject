import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CarouselCard({ topHeadline, toggleActive }) {
  return (
    // Carousel
    <Box className='relative'>
      <Link to={topHeadline.url}>
        <Card className='grid lg:grid-cols-2 md:grid-cols-3 border-2 shadow-none'>
          <Box className='relative md:h-[360px] h-[280px] lg:col-span-1 md:col-span-2'>
            {/* <Box className='bg-red-300 h-full'></Box> */}
            <CardMedia
              component='img'
              className='h-full'
              image={topHeadline?.urlToImage}
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
              sx={{ fontFamily: 'serif'}}
              className='absolute bottom-2 md:text-[22px] sm:text-xl text-lg text-white leading-8 line-clamp-3 px-6'
            >
              {topHeadline?.title}
            </Typography>
          </Box>
          {/* Details */}

          <CardContent className='relative'>
            <Typography
              gutterBottom
              sx={{ fontSize: '20px', fontFamily: 'serif' }}
              className='sm:text-xl text-lg font-serif line-clamp-4'
            >
              {topHeadline?.description}
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontFamily: 'serif' }}
              className='sm:text-xl text-lg font-serif line-clamp-4'
            >
              {topHeadline?.content}
            </Typography>

            <Box className='md:absolute bottom-2'>
              <Typography
                sx={{ fontSize: '18px', fontFamily: 'serif' }}
                className='sm:text-xl text-lg font-serif line-clamp-4'
              >
                Source: {topHeadline?.source.name}
              </Typography>
              <Typography
                sx={{ fontSize: '18px', fontFamily: 'serif' }}
                className='sm:text-xl text-lg font-serif line-clamp-4'
              >
                Date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>

      <ArrowLeft
        onClick={() => {
          toggleActive('prev');
        }}
        size={36}
        className='absolute top-1/2 left-1 bg-neutral-800 text-white rounded-full'
      />
      <ArrowRight
        onClick={() => {
          toggleActive('next');
        }}
        size={36}
        className='absolute top-1/2 right-1 bg-neutral-800 text-white rounded-full'
      />
    </Box>
  );
}

export default CarouselCard;
