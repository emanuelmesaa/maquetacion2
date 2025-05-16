import banner from '../assets/banner/banner.png';
import React from 'react';
import WireFrameButton from '../components/WireFrameButton.jsx';


const svgPlaceholder = (width, height, bgColor = '#DDEEFF', borderColor = '#336699', text = '') => {
  const fontSize = Math.min(width, height) * (text.length > 10 ? 0.1 : 0.15);
  const svgText = text ? `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${fontSize}" fill="${borderColor}">${text}</text>` : '';
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${bgColor}" stroke="${borderColor}" stroke-width="1"/>
      ${svgText}
    </svg>`
  )}`;
};


const SimpleBarChart = ({ data, width = 700, height = 220 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const barWidth = width / data.length - 20;
  return (
    <svg width={width} height={height} style={{ display: 'block', margin: '0 auto', background: '#F5F5F5', border: '1px solid #999' }}>
      {data.map((d, i) => {
        const barHeight = (d.value / maxValue) * (height - 40);
        return (
          <g key={i}>
            <rect
              x={i * (barWidth + 20) + 10}
              y={height - barHeight - 30}
              width={barWidth}
              height={barHeight}
              fill="#336699"
            />
            <text
              x={i * (barWidth + 20) + 30 + barWidth / 2}
              y={height - 10}
              textAnchor="middle"
              fontSize="14"
              fill="#333"
            >
              {d.label}
            </text>
            <text
              x={i * (barWidth + 20) + 30 + barWidth / 2}
              y={height - barHeight - 30}
              textAnchor="middle"
              fontSize="12"
              fill="#336699"
              fontWeight="bold"
            >
              {d.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
};


const MetricBox = ({ title, value }) => (
  <div style={{
    border: '1px solid black',
    padding: '15px',
    textAlign: 'center',
    minWidth: '150px',
    margin: '10px'
  }}>
    <div style={{ fontSize: '0.9em', marginBottom: '5px', color: '#333' }}>{title}</div>
    <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{value}</div>
  </div>
);


function HomePage() {

  const chartData = [
    { label: 'Ene', value: 400 },
    { label: 'Feb', value: 600 },
    { label: 'Mar', value: 800 },
    { label: 'Abr', value: 500 },
    { label: 'May', value: 900 },
    { label: 'Jun', value: 700 },
  ];

  
  return (
    <div style={{ padding: '20px 40px' }}>
      <div style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5em', marginBottom: '15px', fontWeight: 'normal' }}>
          Banner agradable de bienvenida 🥶
        </h2>
        <img
          src={banner}
          alt="Banner de Bienvenida"
          style={{ display: 'block', width: '100%', height: '200px', objectFit: 'cover', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
      </div>
      <div style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
        <h2 style={{ textAlign: 'left', fontSize: '1.3em', marginBottom: '15px', fontWeight: 'normal' }}>
          Métricas Simples
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <MetricBox title="Clientes Activos" value="1,234" />
          <MetricBox title="Productos en Stock" value="456" />
          <MetricBox title="Ventas (Mes)" value="1,890" />
          <MetricBox title="Ingresos (Mes)" value="$ 25,670" />
        </div>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'left', fontSize: '1.3em', marginBottom: '15px', fontWeight: 'normal' }}>
          Gráfica Simple 
        </h2>
        <SimpleBarChart data={chartData} />
      </div>
      <div style={{ marginTop: '30px', textAlign: 'center', borderTop: '1px solid #ccc', paddingTop: '30px' }}>
        <WireFrameButton to="/buscar-cliente" style={{ marginRight: '10px' }}>Buscar Clientes</WireFrameButton>
        <WireFrameButton to="/buscar-producto">Buscar Productos</WireFrameButton>
      </div>
    </div>
  );
}
export default HomePage;