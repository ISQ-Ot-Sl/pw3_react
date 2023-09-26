import { useState } from 'react'
import './App.css'
import FragmentoPai from './components/FragmentoPai'
import Fragmentos from './components/Fragmentos'
import FuncaoFragmento from './components/FuncaoFragmento'
import ListaFragmentos from './components/ListaFragmentos'

function App() {
  function exibirMensagem(){
    console.log("Função que transita entre componentes!")
  }

  const [mensagem, setMensagem] = useState ("")
  const trocaMensagem = (msg) => {
    setMensagem(msg)
  }
  const motos = [
    {id: 1, marca: "Honda", modelo: "XRE 300", km: 12000, usado: true, ano: 2023},
    {id: 2, marca: "Yamaha", modelo: "Virago 750", km: 80000, usado: true, ano: 2005},
    {id: 3, marca: "Kawazaki", modelo: "Ninja 1000", km: 12000, usado: true, ano: 2021},
    {id: 4, marca: "BMW", modelo: "GS 1200", km: 24000, usado: true, ano: 2020},
    {id: 5, marca: "Harley Davidson", modelo: "FatBoy 114 1500", km: 0, usado: false, ano: 2023},
    {id: 6, marca: "Honda", modelo: "CB 500", km: 124000, usado: true, ano: 2010},

  ]
  return (
    <main>
      <h1>Página Principal do App</h1>

      <div>
        <Fragmentos marca = "FIAT" km = {1000} modelo = "Fastback" usado = {true} />
      </div>

      <div>
        <ListaFragmentos motos = {motos} />
      </div>

      <div>
        <FuncaoFragmento appFuncao = {exibirMensagem} />
      </div>

      <div>
        <FragmentoPai>
          <p>Tratamento de Códigos</p>
        </FragmentoPai>
      </div>

    </main>  
  )
}

export default App
