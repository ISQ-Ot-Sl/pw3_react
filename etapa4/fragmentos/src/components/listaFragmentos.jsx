const listaFragmentos = (motos) => {
  return (
   <>
   <table>
        <tr key = {itemMoto.id}>
            <th>Marca</th>
            <th>Modelo</th>
            <th>KM</th>
            <th>Usado</th>
            <th>Ano</th>                     
        </tr>
        {motos.map((itemMoto) => {
            <tr>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td>{itemMoto.usado ? "Usado" : "Novo"}</td>
                <td>{itemMoto.ano}</td>
            </tr>

        })}

   </table>

   </>
  )
}

export default listaFragmentos