import { useState } from 'react'
import mapAPI from '../utils/convertUnit';
import { LengthUnits } from '../enums/LengthUnits';
import { WeightUnits } from '../enums/WeightUnits';
import { TemperatureUnits } from '../enums/TemperatureUnits';



function Converter({ ENUM, tipo }) {
  var listasDeUnidades = Object.values(ENUM);
  var apiResponsable = mapAPI(tipo);
  const [valor, setValor] = useState("");
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <>
      <div class = "converter">
          <input
            type="number"
            placeholder="Ingrese número"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
            <option value="">Unidad</option>
            {listasDeUnidades.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>

          <input type="text" placeholder="Resultado" value={resultado} readOnly />
          <select value={destino} onChange={(e) => setDestino(e.target.value)}>
            <option value="">Unidad destino</option>
            {listasDeUnidades.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>

        <button id="convertir" onClick={async () => {
            const res = await apiResponsable(origen, destino, parseFloat(valor));
            setResultado(res);}}> Convertir </button>
      </div>
    </>
  )
}

export default Converter