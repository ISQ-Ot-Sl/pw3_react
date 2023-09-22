const Fragmentos = ({marca, km, modelo, usado}) => {
    
  return (
   <>
   <h2>Componente de Props</h2>
   <h3>Carro ordenado:</h3>
   <table>
    <tr>
        <th>Marca</th>
        <th>KM</th>
        <th>Modelo</th>
        <th>Usado</th>
    </tr>

    <tr>
        <td>{marca}</td>
        <td>{km}</td>
        <td>{modelo}</td>
        <td>{usado ? "Usado" : "Novo"}</td>
    </tr>

   </table>

    </>
  )
}

export default Fragmentos