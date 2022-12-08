import React from 'react';
import './App.css';
import './Footer.css';
import './Login.css';
import './Header.css';
import './Banner.css';



// importamos los componentes receta
import CompMostrarReceta from './receta/MostrarReceta';
import CompAgregarReceta from './receta/CrearReceta';
import CompEditarReceta from './receta/ModificarReceta';

// importamos los componentes historia
import CompMostrarHistoria from './historia/MostrarHistoria';
import CompAgregarHistoria from './historia/CrearHistoria';
import CompEditarHistoria from './historia/ModificarHistoria';

// importamos los componentes administrador
import CompMostrarAdministrador from './administrador.js/MostrarAdministrador';
import CompAgregarAdministrador from './administrador.js/CrearAdministrador';
import CompEditarAdministrador from './administrador.js/ModificarAdministrador';

// importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importamos componentes
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Banner from './components/Banner.js';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    
      <main>
        <div className="App">
          
        <BrowserRouter>
        <Routes>
          <Route path='/receta/' element={<CompMostrarReceta />} />
          <Route path='/receta/agregar/' element={<CompAgregarReceta />} />
          <Route path='/receta/editar/:id' element={<CompEditarReceta />} />

          <Route path='/historia/' element={<CompMostrarHistoria />} />
          <Route path='/historia/agregar/' element={<CompAgregarHistoria />} />
          <Route path='/historia/editar/:id' element={<CompEditarHistoria />} />

          <Route path='/administrador/' element={<CompMostrarAdministrador />} />
          <Route path='/administrador/agregar/' element={<CompAgregarAdministrador />} />
          <Route path='/administrador/editar/:id' element={<CompEditarAdministrador />} />

          <Route path='/login/' element={<Login />} />

        </Routes>
      </BrowserRouter>
        </div>
    
      <Footer/>
      </main>
      </>
  );
}

export default App;
