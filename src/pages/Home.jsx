import React from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';
import { ArrowBigRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import HeaderSection from '../components/HeaderSection';
import { categories } from '../utils/constants';

function Home() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }}>
      <Carousel />

      {/* NewsCardList */}
      <Box className='mt-4'>
        {categories.map((item, indx) => (
          <>
            <HeaderSection title={item} />
            <Box className='grid grid-cols-5 gap-3'>
              {[...Array(5)].map((_, indx) => (
                <Card key={indx}>
                  <Box className='bg-red-300 w-full aspect-[16/9] h-[180px]' />
                  <CardContent>
                    <CardContent className='relative'>
                      <Typography
                        sx={{ fontSize: '16px', fontFamily: 'serif' }}
                        className='text-xl font-serif line-clamp-4'
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi natus velit aliquid laudantium ipsam minima?
                      </Typography>
                      <Typography
                        sx={{ fontSize: '14px', fontFamily: 'serif' }}
                        className='text-xl font-serif line-clamp-4'
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi natus velit aliquid laudantium ipsam minima?
                      </Typography>

                      <Box className=''>
                        <Typography
                          sx={{ fontSize: '14px', fontFamily: 'serif' }}
                          className='text-xl font-serif line-clamp-4'
                        >
                          Source: ABC News
                        </Typography>
                        <Typography
                          sx={{ fontSize: '14px', fontFamily: 'serif' }}
                          className='text-xl font-serif line-clamp-4'
                        >
                          Date: 1/1/25
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
