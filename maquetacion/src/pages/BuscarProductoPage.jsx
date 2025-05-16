import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';
import { FaSearch } from 'react-icons/fa';

function BuscarProductoPage() {
  const navigate = useNavigate();
  const handleBuscarProducto = () => navigate('/productos');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '40px', minHeight: 'calc(100vh - 100px)' }}>
      <div style={{
        border: '2px solid black', padding: '50px 30px', width: '380px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px',
      }}>
        <input
          type="text"
          placeholder="ID"
          style={{
            width: '100%', boxSizing: 'border-box', padding: '15px 10px',
            marginBottom: '40px', fontSize: '1.2em', border: '2px solid black'
          }}
        />
        <WireFrameButton
          onClick={handleBuscarProducto}
          style={{ padding: '10px 30px', fontSize: '1.1em', marginBottom: '25px', border: '3px solid black' }}
        >
          <FaSearch style={{ marginRight: '8px' }} />
          Buscar
        </WireFrameButton>
        <Link to="/buscar-cliente" style={{ fontSize: '1em', textDecoration: 'underline', color: 'black' }}>
          Buscar cliente
        </Link>
      </div>
      <div style={{
        paddingTop: '20px', paddingLeft: '50px', flexGrow: 1,
        display: 'flex', justifyContent: 'center', alignItems: 'flex-start'
      }}>
        <h1 style={{ fontSize: '3.5em', fontWeight: 'normal', margin: 0, textAlign: 'center' }}>
          Buscar Producto
        </h1>
      </div>
    </div>
  );
}
export default BuscarProductoPage;