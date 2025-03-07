import React from 'react'
import { Box, Grid2, Typography, Card } from '@mui/material'
function CarouselList() {
  return (
    <Box className='grid grid-cols-5 gap-3 mt-8'>
        {[...Array(5)].map((item, index) => (
          <Grid2 key={index}>
            <Card className='relative'>
              <Box className='bg-red-300 w-full aspect-[16/10]'></Box>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati dolore sunt, cum quas quod officiis tempora quos hic
                consequuntur error quisquam ea ab qui est non numquam
                perferendis similique temporibus.
              </Typography>
            </Card>
          </Grid2>
        ))}
      </Box>
  )
}

export default CarouselList
