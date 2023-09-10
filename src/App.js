import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/Home/HomePage';
import Services from './Components/Services/Services';
import ContactUs from './Components/Contact/ContactUs'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/contact' element={<ContactUs />}/>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
