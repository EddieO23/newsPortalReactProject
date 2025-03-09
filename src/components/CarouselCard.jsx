import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function CarouselCard({topHeadline, toggleActive}) {
  return (
// Carousel 
   <Card className=' relative grid grid-cols-2 border-1  shadow-none'>
   <Box className='relative h-[360px]'>
     {/* <Box className='bg-red-300 h-full'></Box> */}
     <CardMedia component='img'
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
       sx={{ fontFamily: 'serif', fontSize: '22px' }}
       className='absolute bottom-2 text-white leading-8 line-clamp-3 px-6'
     >
       {topHeadline?.title}
     </Typography>
   </Box>

   {/* Details */}

   <CardContent className='relative'>
     <Typography gutterBottom
       sx={{ fontSize: '20px', fontFamily: 'serif' }}
       className='text-xl font-serif line-clamp-4'
     >
       {topHeadline?.description}
     </Typography>
     <Typography
       sx={{ fontSize: '18px', fontFamily: 'serif' }}
       className='text-xl font-serif line-clamp-4'
     >
       {topHeadline?.content}
     </Typography>

     <Box className='absolute bottom-2'>
       <Typography
         sx={{ fontSize: '18px', fontFamily: 'serif' }}
         className='text-xl font-serif line-clamp-4'
       >
        Source:  {topHeadline?.source.name}
       </Typography>
       <Typography
         sx={{ fontSize: '18px', fontFamily: 'serif' }}
         className='text-xl font-serif line-clamp-4'
       >
         Date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
       </Typography>
     </Box>
   </CardContent>

   <ArrowLeft onClick={()=>{toggleActive('prev')}} size={36}  className='absolute top-1/2 left-1 bg-neutral-800 text-white rounded-full'/>
   <ArrowRight onClick={()=>{toggleActive('next')}} size={36}  className='absolute top-1/2 right-1 bg-neutral-800 text-white rounded-full'/>
 </Card> 
  )
}

export default CarouselCard