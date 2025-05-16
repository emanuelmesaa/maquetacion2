import camara from '../assets/products/camara.png';  
import audi from '../assets/products/audi.png';  
import kboard from '../assets/products/kboard.png';  
import portatil from '../assets/products/portatil.png';  
import screen from '../assets/products/screen.png';  
import phone from '../assets/products/phone.png';
import React from 'react';
import { useParams } from 'react-router-dom';
import WireFrameButton from '../components/WireFrameButton.jsx';


const productImages = [portatil, phone, kboard, screen, audi, camara];

const getProductData = (id) => {
  const baseId = parseInt(id, 10) || 1;
  const names = ["Laptop Ultrabook X1", "Smartphone Alpha Z", "Teclado Gamer K70", "Monitor Curvo QHD 32\"", "Auriculares ProSound BT", "Webcam CrystalView 4K"];
  const prices = ["1199.00", "699.99", "129.50", "449.00", "199.90", "79.99"];
  const descriptions = [
    "Laptop ultraligera y potente, ideal para trabajo y movilidad. Batería de larga duración.",
    "El último smartphone con cámara de 108MP, pantalla Super AMOLED y procesador Snapdragon de última generación.",
    "Teclado mecánico con switches Cherry MX, iluminación RGB programable y reposamuñecas magnético.",
    "Monitor curvo de 32 pulgadas con resolución QHD (2560x1440) y tasa de refresco de 165Hz.",
    "Auriculares Bluetooth con cancelación activa de ruido, sonido Hi-Fi y hasta 30 horas de reproducción.",
    "Webcam 4K con enfoque automático, micrófono estéreo con reducción de ruido y anillo de luz."
  ];
  const stock = [22, 45, 18, 8, 31, 50];
  const skus = ["LPX1-2023", "SMZ-ALPHA", "KGK70-RGB", "MCQHD32", "APS-BTNC", "WCV4K-01"];
  const categories = ["Portátiles", "Móviles", "Periféricos PC", "Monitores", "Audio", "Webcams"];
  const index = (baseId - 1 + names.length) % names.length;

  return { name: names[index], price: prices[index], description: descriptions[index], stock: stock[index], sku: skus[index], category: categories[index], img: productImages[index] };
};


function DetalleProductoPage() {
  let { productoId } = useParams();
  const productData = getProductData(productoId);

  
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'normal', marginBottom: '30px' }}>
        Detalle Producto
      </h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '90%', maxWidth: '1000px', marginBottom: '50px', alignItems: 'flex-start', gap: '40px' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={productData.img}
            alt={`Imagen ${productData.name}`}
            style={{ width: '100%', maxWidth: '400px', height: 'auto', border: '2px solid black', marginBottom: '15px', objectFit: 'contain' }}
          />
        </div>
        <div style={{ flex: '1 1 400px', fontSize: '1em', lineHeight: '1.6' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.5em', fontWeight: 'bold' }}>{productData.name}</h2>
          <p style={{ fontSize: '1.4em', fontWeight: 'bold', color: '#000', margin: '10px 0 20px 0' }}>Precio: ${productData.price}</p>
          <h3 style={{ fontSize: '1.1em', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', fontWeight: 'normal' }}>Descripción</h3>
          <p style={{ fontSize: '0.95em' }}>{productData.description}</p>
          <h3 style={{ fontSize: '1.1em', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', marginTop: '25px', fontWeight: 'normal' }}>Detalles Adicionales</h3>
          <p><strong>Stock:</strong> {productData.stock} unidades disponibles</p>
          <p><strong>SKU:</strong> {productData.sku}</p>
          <p><strong>Categoría:</strong> {productData.category}</p>
        </div>
      </div>
      <WireFrameButton to="/productos" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}>Listado productos</WireFrameButton>
    </div>
  );
}
export default DetalleProductoPage;