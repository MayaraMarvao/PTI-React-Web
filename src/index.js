import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'


import App from './pages/App';
import Documentacao from './pages/Documentacao';
import Tutorial from './pages/Tutorial';
import Blog from './pages/Blog';
import Comunidade from './pages/Comunidade';
import SobreMim from './pages/Sobremim';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/documentacao' element={<Documentacao />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/comunidade' element={<Comunidade/>}/>
        <Route path='/sobremim' element={<SobreMim />} />
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
