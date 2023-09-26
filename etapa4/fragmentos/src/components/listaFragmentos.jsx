import styles from "./ListaFragmentos.module.css"

const ListaFragmentos = ({ motos }) => {
  return (
   <>
   <table className = {styles.lf_table}>
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>KM</th>
            <th>Usado</th>
            <th>Ano</th>                     
        </tr>
        {motos.map((itemMoto) => {
            return(                
            <tr key={itemMoto.id} style = 
            {
                itemMoto.id % 2 === 0 ?
                {backgroundColor: "#ccc", color: "#000"} : null
            }>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td className = { //diretivas
                    itemMoto.usado ? styles.lf_red : styles.lf_green
                }>{itemMoto.usado ? "Usado" : "Novo"}</td>
                <td className= {
                    itemMoto.ano > 2013 ? styles.lf_blue : styles.lf_yellow
                }>{itemMoto.ano}</td>
            </tr>
            )
        })}

   </table>

   </>
  )
}

export default ListaFragmentos