import { useRef, useState } from "react"
import { v4 } from "uuid"
import { Botao, Botao2 } from "./style"
import { Container } from "./style"
import { Atividades } from "./style"





function App(){


  const [atividades, setAtividades] = useState([])
  const inputRef = useRef()
  function Adicionar(){
    setAtividades([{id:v4(), nome:inputRef.current.value}, ...atividades])
    inputRef.current.value=""
  }

  function realizado(id){
    setAtividades(atividades.filter(atividade => atividade.id !== id))
    inputRef.current.value=""
  }
  
  return(
    <Container >
      <h1>Lista de Tarefas</h1>
      <input id="campo" type="text" placeholder="Digite aqui sua nova tarefa" ref={inputRef}/>
      <Botao onClick={Adicionar}>Adicionar Tarefa</Botao>
      {
        
        atividades.map((atividade) =>(
          <Atividades  id="atividades" key={atividade.id}> 
          <p>{atividade.nome}</p> 
           <Botao2 onClick={()=> realizado(atividade.id)}>✔️</Botao2>
          </Atividades>
          
        ))
      }
  
      
    </Container>
  )

}
export default App