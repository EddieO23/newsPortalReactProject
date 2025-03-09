import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import {getTopHeadlines} from '../utils/api'
import ExploreCardsList from '../components/ExploreCardsList'

function Explore() {
const location = useLocation()
// The useLocation hook in React is a part of the React Router library. It returns the current location object, which contains information about the current URL, including the pathname, search parameters, and hash.
const category = location.state?.category

const [categoryData, setCategoryData] = useState({})

const fetchNews = async () => {
  if(!category) return 

  const response = await getTopHeadlines(category)
  
  
  if(response.data) {
    const filterNews = response.data.articles.filter(
      (res) => res.urlToImage != null
    )
    setCategoryData(prev => ({
      ...prev, [category]: filterNews
    }))
  }
}
// In short, this function fetches news articles based on a specified category, filters out those without images, and updates the state with the valid articles. If no category is provided, it simply stops execution.

useEffect(() => {
fetchNews()
}, [])
useEffect(() => {
  console.log(categoryData);
  
}, [categoryData])


  return (
    <Box>
      {
        categoryData[category] && categoryData[category].length > 0 &&
        <ExploreCardsList />
      }
    </Box>
  )
}

export default Explore
