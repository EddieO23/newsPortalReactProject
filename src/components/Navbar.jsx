import {
  Box,
  Divider,
  InputBase,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';
import React, {useState} from 'react';
import { Search } from 'lucide-react';
import { categories } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate() 
const [search, setSearch] = useState("")
const handleChange = (e) => {
  setSearch(e.target.value)
}
const handleKeyPress = (e) => {
  if(e.key === 'Enter'){
    e.preventDefault()
    setSearch("")
    navigate(`/search`, {state:{title: `What we found for ${search}`, query: search}})
  }
}

const handleSearchIconClick = () => {
  setSearch("")
  navigate(`/search`, {state:{title: `What we found for ${search}`, query: search}})

}


  return (
    <Box className='bg-neutral-900 text-white'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: {sm: '90%', xs: '95%'},
          mx: 'auto',
          py: 1,
        }}
      >
        <Box
        onClick={()=> navigate(`/`)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: {md: '1.5rem', sm: '1.25rem',xs: '1rem'},
            fontFamily: 'serif',
          }}
        >
          <Typography
            sx={{
              fontSize: 'inherit',
              fontFamily: 'inherit',
              fontWeight: 'bold',
            }}
          >
            NEWS
          </Typography>
          <Typography
            sx={{
              fontSize: 'inherit',
              fontFamily: 'inherit',
              fontWeight: 'light',
            }}
          >
            DAILY
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'black',
            px: {sm: 4, xs: 3},
            gap: 2,
            borderRadius: '999px',
            color: '#c2c2c2',
          }}
        >
          {/* search icon here */}

          <Search onClick={handleSearchIconClick} size={20} />

          {/* divider here */}
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ bgcolor: 'gray' }}
          />
          {/* divider ends here */}

          <InputBase
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder='Search'
            sx={{
              color: 'white',
              width: {md: '350px', sm: '300px', xs: '180px'},
              height: '2.5rem',
              fontSize: {sm: '1rem', xs: '0.875rem'},
              fontFamily: 'serif',
              '&::placeholder': { color: '#646464' },
            }}
          />
        </Box>
      </Box>
      <ButtonGroup
        className='bg-neutral-800 w-full overflow-x-auto rounded-none'
        sx={{
          '& .MuiButton-root': {
            color: 'white',
          },
        }}
        variant='text'
      >
        {categories.map((item, idx) => (
          <Button
          onClick={()=>navigate(`/explore`, {state: {category:item}})}
            className='min-w-fit w-full hover:bg-neutral-900'
            key={idx}
            sx={{ fontSize: {md:'16px', sm: '13px', xs: '12px'} }}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default Navbar;
