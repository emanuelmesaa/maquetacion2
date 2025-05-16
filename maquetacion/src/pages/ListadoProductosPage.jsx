import laptop from '../assets/products/laptop.png';
import celular from '../assets/products/celular.png';
import teclado from '../assets/products/teclado.png';
import monitor from '../assets/products/monitor.png';
import ear from '../assets/products/ear.png';
import camarita from '../assets/products/camarita.png';
import React from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';
import { RxFontBold } from 'react-icons/rx';


const sampleProducts = [
  { name: "Laptop Pro X", summary: "Alto rendimiento, pantalla 15\"." },
  { name: "Smartphone Z", summary: "Cámara 48MP, batería larga duración." },
  { name: "Teclado Mecánico K", summary: "Switches rojos, RGB configurable." },
  { name: "Monitor Curvo 27\"", summary: "144Hz, ideal para gaming." },
  { name: "Auriculares BT Noise Cancelling", summary: "Sonido inmersivo, 20h batería." },
  { name: "Webcam HD 1080p", summary: "Micrófono incorporado, USB-C." },
];


const productImg = [laptop, celular, teclado, monitor, ear, camarita];
function ListadoProductosPage() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {sampleProducts.map((productData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
            <img
              src={productImg[index]}
              alt={`Miniatura ${productData.name}`}
              style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '15px', border: '1px solid #ccc' }}
            />
            <div style={{ flexGrow: 1 }}>
              <p style={{ fontSize: '1em', fontWeight: 'bold', margin: '0 0 5px 0' }}>{productData.name}</p>
              <p style={{ fontSize: '0.85em', color: '#444', margin: 0 }}>{productData.summary}</p>
            </div>
            <WireFrameButton to={`/producto-detalle/${index + 1}`} style={{ padding: '8px 30px', marginTop: '15px', border: '3px solid black', fontWeight: 'bold' }}>Ver</WireFrameButton>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <WireFrameButton to="/" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold'}}>Home</WireFrameButton>
      </div>
    </div>
  );
}
export default ListadoProductosPage;