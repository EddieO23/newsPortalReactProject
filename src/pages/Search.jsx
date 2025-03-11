import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getByQuery } from '../utils/api';
import ExploreCardsList from '../components/ExploreCardsList';

function Search() {
  const [searchData, setSearchData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  const { title, query } = location.state;

  const fetchSearch = async () => {
    const response = await getByQuery(query,pageNumber);
    console.log('response', response);

    if (response.data) {
      const filterNews = response.data.articles.filter(
        (res) => res.urlToImage != null
      );
      setSearchData(prev=>[...prev, ...filterNews]);
      setPageNumber(prev=>prev+1)
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  return (
    <Container maxWidth='false' sx={{ width: '90%', mt: 5, mb: 10 }}>
      <Typography
        variant='h4'
        sx={{ fontFamily: 'serif', cursor: 'pointer', mb: 1 }}
      >
        {title}
      </Typography>
      {searchData.length && <ExploreCardsList list={searchData} />}
      <Box display='flex' justifyContent='center' mt={3}>
        <Button
          onClick={() => fetchSearch()}
          sx={{ background: 'gray' }}
          variant='contained'
          disableElevation
        >
          Load more...
        </Button>
      </Box>
    </Container>
  );
}

export default Search;
