// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'; // <--- IMPORTAR HOMEPAGE
import BuscarClientePage from './pages/BuscarClientePage.jsx';
import BuscarProductoPage from './pages/BuscarProductoPage.jsx';
import ListadoClientesPage from './pages/ListadoClientesPage.jsx';
import ListadoProductosPage from './pages/ListadoProductosPage.jsx';
import DetalleClientePage from './pages/DetalleClientePage.jsx';
import DetalleProductoPage from './pages/DetalleProductoPage.jsx';
import WireFrameButton from './components/WireFrameButton.jsx';

import './App.css'; // El App.css minimalista

function App() {
  console.log("Renderizando App.jsx con HomePage como ruta raíz");
  return (
    <Router>
      <div className="page-container">
        <Routes>
          {/* Ahora la ruta raíz es HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} /> {/* Ruta alternativa */}

          {/* Las otras páginas */}
          <Route path="/buscar-cliente" element={<BuscarClientePage />} />
          <Route path="/buscar-producto" element={<BuscarProductoPage />} />
          <Route path="/clientes" element={<ListadoClientesPage />} />
          <Route path="/productos" element={<ListadoProductosPage />} />
          <Route path="/cliente-detalle/:clienteId" element={<DetalleClientePage />} />
          <Route path="/producto-detalle/:productoId" element={<DetalleProductoPage />} />

          <Route path="*" element={
              <div style={{textAlign: 'center', padding: '50px'}}>
                <h1 style={{fontWeight: 'normal'}}>404 - Página No Encontrada</h1>
                <WireFrameButton to="/">Volver al Inicio</WireFrameButton> {/* Ahora va a HomePage */}
              </div>
            } />
        </Routes>
      </div>
    </Router>
  );
}
export default App;