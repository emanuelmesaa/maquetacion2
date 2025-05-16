import ana from '../assets/avatars/ana.jpg';
import carlos from '../assets/avatars/carlos.jpg';
import javier from '../assets/avatars/javier.jpeg';
import laura from '../assets/avatars/laura.jpeg';
import luis from '../assets/avatars/luis.jpg';
import sofia from '../assets/avatars/sofia.jpeg';
import React from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';


const sampleClients = [
  { name: "Ana García", summary: "Cliente frecuente, última compra hace 1 semana.", gender: "female" },
  { name: "Luis Martínez", summary: "Nuevo cliente, primera compra realizada.", gender: "male" },
  { name: "Carlos Rodríguez", summary: "Cliente VIP, alto volumen de compras.", gender: "male" },
  { name: "Sofía Hernández", summary: "Interesada en categoría X, contactar.", gender: "female" },
  { name: "Javier López", summary: "Requiere soporte técnico.", gender: "male" },
  { name: "Laura Gómez", summary: "Activa desde 2022, cumpleaños próximo.", gender: "female" },
];


const avatarImg = [ana, luis, carlos, sofia, javier, laura];
function ListadoClientesPage() {
  return (
    <div style={{ padding: '30px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '40px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {sampleClients.map((clientData, index) => (
          <div key={index} style={{ border: '2px solid black', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', padding: '20px', textAlign: 'center', borderRadius: '10px'}}>
            <img
              src={avatarImg[index]}
              alt={`Avatar ${clientData.name}`}
              style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px', border: '1px solid #ccc', backgroundColor: '#eee' }}
              loading="lazy"
              onError={(e) => { e.target.src = svgAvatarPlaceholder(60, 60); e.target.onerror = null; }}
            />
            <div style={{ flexGrow: 1 }}>
              <p style={{ fontSize: '1em', fontWeight: 'bold', margin: '0 0 5px 0' }}>{clientData.name}</p>
              <p style={{ fontSize: '0.85em', color: '#444', margin: 0 }}>{clientData.summary}</p>
            </div>
            <WireFrameButton to={`/cliente-detalle/${index + 1}`} style={{ padding: '8px 30px', marginTop: '15px', border: '3px solid black', fontWeight: 'bold' }}>Ver</WireFrameButton>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right' }}>
        <WireFrameButton to="/" style={{ padding: '8px 30px', border: '3px solid black', fontWeight: 'bold' }}>Home</WireFrameButton>
      </div>
    </div>
  );
}
export default ListadoClientesPage;