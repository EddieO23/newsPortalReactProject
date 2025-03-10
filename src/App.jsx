import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Search from './pages/Search';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
