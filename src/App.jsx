import { useState } from 'react'
import Converter from './components/Converter.jsx'
import { LengthUnits } from './enums/LengthUnits.jsx'
import { WeightUnits } from './enums/WeightUnits.jsx'
import { TemperatureUnits } from './enums/TemperatureUnits.jsx'
import './styles/index.css';

function App() {
  const [tipo, setTipo] = useState("temperature"); // tipo de convertidor activo

  const getENUM = () => {
    switch(tipo) {
      case "length": return LengthUnits;
      case "weight": return WeightUnits;
      case "temperature": return TemperatureUnits;
      default: return TemperatureUnits;
    }
  };

  return (
    <div className="main-container">
      <div className="converter-nav">
        <li onClick={() => setTipo("length")}>Length</li>
        <li onClick={() => setTipo("weight")}>Weight</li>
        <li onClick={() => setTipo("temperature")}>Temperature</li>
      </div>
      <Converter key={tipo} ENUM={getENUM()} tipo={tipo} />
    </div>
  );
}

export default App
