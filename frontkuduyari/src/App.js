import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
