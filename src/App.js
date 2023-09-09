import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/Home/HomePage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/home' element={<HomePage />}/>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
