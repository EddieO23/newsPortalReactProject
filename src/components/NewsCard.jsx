import React from 'react'
import { categories } from '../utils/constants'
import HeaderSection from './HeaderSection'
import {Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function NewsCard({item}) {
  return (
   <Link to={item.url}>
            <Card className='relative shadow-none border-2 h-[450px]'>
              {/* <Box className='bg-red-300 w-full aspect-[16/9] h-[180px]' /> */}
              <CardMedia className='w-full aspect-[16/9] h-[180px]' component='img' image={item.urlToImage}/>
                <CardContent className='mb-12'>
                  <Typography
                    sx={{ fontSize: '16px', fontFamily: 'serif' }}
                    className='text-xl font-serif line-clamp-4'
                    >
                   {item.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: '14px', fontFamily: 'serif' }}
                    className='text-xl font-serif line-clamp-4'
                    >
                    {item.description}
                  </Typography>

                  <Box className='absolute bottom-2'>
                    <Typography
                      sx={{ fontSize: '14px', fontFamily: 'serif' }}
                      className='text-gray-500 text-xl font-serif line-clamp-4'
                      >
                      {item.source.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: '14px', fontFamily: 'serif' }}
                      className='text-xl font-serif line-clamp-4'
                      >
                      Date: {new Date(item.publishedAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
            </Card>
                      </Link>     
  )
}

export default NewsCard
