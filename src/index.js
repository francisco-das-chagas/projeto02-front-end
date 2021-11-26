import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import WishList from './pages/WishList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/lista' element={<WishList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
