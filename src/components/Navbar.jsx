import {
  Box,
  Divider,
  InputBase,
  Typography,
  Button,
  ButtonGroup,
} from '@mui/material';
import React from 'react';
import { Search } from 'lucide-react';
import { categories } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate()

  return (
    <Box className='bg-neutral-900 text-white'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
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
            fontSize: '1.5rem',
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
            px: 4,
            gap: 2,
            borderRadius: '99px',
            color: '#c2c2c2',
          }}
        >
          {/* search icon here */}

          <Search size={20} />

          {/* divider here */}
          <Divider
            orientation='vertical'
            variant='middle'
            flexItem
            sx={{ bgcolor: 'gray' }}
          />
          {/* divider ends here */}

          <InputBase
            sx={{
              color: 'white',
              width: '350px',
              height: '2.5rem',
              fontSize: '1rem',
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
            sx={{ fontSize: '12px' }}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

export default Navbar;
