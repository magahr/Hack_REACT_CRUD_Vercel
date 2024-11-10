import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/layout';
import { Home } from './components/home';
import { Formularios } from './components/formularios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(){
   return (
      <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/formulario" element={<Formularios />} />
            </Routes>
          <Footer />
        </BrowserRouter>
         
      </>
 
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


