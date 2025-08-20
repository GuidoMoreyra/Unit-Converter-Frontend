
function mapAPI(tipo) {
    return async function convertirUnidad(origen, destino, valor) {
        try {
            const response = await fetch(`http://localhost:8080/converter/${tipo}?from=${origen}&to=${destino}&value=${valor}`, {
            method: 'POST'
            });

            if (!response.ok) {
            throw new Error("Error en la API");
            }

            const resultado = await response.json(); // asumimos que devuelve un número
            return resultado;
        } catch (error) {
            console.error(error);
            return null;
        }
        }
}
export default mapAPI