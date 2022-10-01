import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';

import './assets/styles/global.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category/:id' element={<Question />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  );
};

export default App;
