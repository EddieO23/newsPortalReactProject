import React from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { ArrowBigRight } from 'lucide-react';

function Home() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }}>
      {/* HEADER */}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Typography
          sx={{ fontSize: '2.25rem', fontFamily: 'serif', cursor: 'pointer' }}
        >
          TOP HEADLINES
        </Typography>

        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'black',
            '&:hover': {
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
            },
          }}
        >
          SEE ALL
          <ArrowBigRight size={20} />
        </Button>
      </Box>
      {/* CAROUSEL */}

      <Card className='grid grid-cols-2 border-1  shadow-none'>
        <Box className='relative h-[360px]'>
          <Box className='bg-red-300 h-full'></Box>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolore sunt, cum quas quod officiis tempora quos hic consequuntur
            error quisquam ea ab qui est non numquam perferendis similique
            temporibus.
          </Typography>
        </Box>

        {/* Details */}

        <CardContent className='relative'>
          <Typography
            sx={{ fontSize: '20px', fontFamily: 'serif' }}
            className='text-xl font-serif line-clamp-4'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
            velit aliquid laudantium ipsam minima?
          </Typography>
          <Typography
            sx={{ fontSize: '18px', fontFamily: 'serif' }}
            className='text-xl font-serif line-clamp-4'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus
            velit aliquid laudantium ipsam minima?
          </Typography>

          <Box className="absolute bottom-2">
            <Typography
              sx={{ fontSize: '18px', fontFamily: 'serif' }}
              className='text-xl font-serif line-clamp-4'
            >
              Source: ABC News
            </Typography>
            <Typography
              sx={{ fontSize: '18px', fontFamily: 'serif' }}
              className='text-xl font-serif line-clamp-4'
            >
              Date: 1/1/25
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
