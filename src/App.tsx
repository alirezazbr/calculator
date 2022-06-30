import React from 'react';
import {
  CssBaseline,
  Box,
} from '@mui/material';

import AppRoutes from './routes';

const App = () => (
  <div>
    <CssBaseline />
    <Box className={'viewBox'} component={'main'}>
      <AppRoutes />
    </Box>
  </div>
);

export default App;
