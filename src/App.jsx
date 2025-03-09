import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
