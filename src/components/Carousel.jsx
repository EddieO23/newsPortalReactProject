import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Grid2,
} from '@mui/material';
import HeaderSection from './HeaderSection';
import CarouselCard from './CarouselCard';
import CarouselList from './CarouselList';
import axios from 'axios';



function Carousel() {
  const [topHeadlines, setTopHeadlines] =  useState([])

  const fetchTopHeadlines = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=bc2bbd523cbb4ee5bb054d6c99ec82c6`)
      console.log(response.data.articles);

      const filterHeadlines = response.data.articles.filter((res) => res.urlToImage != null)

      setTopHeadlines(filterHeadlines)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchTopHeadlines()
  }, [])
  return (
    <Box>
      {/* HEADER */}
      <HeaderSection title='Top Headlines' />

      <CarouselCard topHeadline={topHeadlines[0]}/>

      {/* Caoursel List */}
      <CarouselList topHeadline={topHeadlines}/>
    </Box>
  );
}

export default Carousel;
