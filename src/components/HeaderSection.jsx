import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBigRight } from 'lucide-react';

function HeaderSection({title}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
      <Typography
        sx={{ fontSize: {md: '2.25rem', xs: '1.5rem'}, fontFamily: 'serif', cursor: 'pointer' }}
      >
        {title}
      </Typography>

      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontSize:{lg: '1rem', md: '0.875rem', xs:"0.8rem"},          
          color: 'black',
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          },
        }}
      >
        SEE ALL
        <ArrowBigRight size={20} className='md:text-2xl xs:text-md ' />
      </Button>
    </Box>
  );
}

export default HeaderSection;
