import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBigRight } from 'lucide-react';

function HeaderSection({title}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
      <Typography
        sx={{ fontSize: '2.25rem', fontFamily: 'serif', cursor: 'pointer' }}
      >
        {title}
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
  );
}

export default HeaderSection;
