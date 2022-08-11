import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Hex from './pages/subpages/Hex';
import Lyra from './pages/subpages/Lyra';
import Urwebee from './pages/subpages/Urwebee';
import Eden from './pages/subpages/Eden';
import Karel from './pages/subpages/Karel';
import Mbm from './pages/subpages/Mbm';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/a-propos' element={<About/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/hex' element={<Hex/>} />
          <Route path='/lyra' element={<Lyra/>} />
          <Route path='/urwebee' element={<Urwebee/>} />
          <Route path='/eden' element={<Eden/>} />
          <Route path='/karel' element={<Karel/>} />
          <Route path='/mbm' element={<Mbm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;