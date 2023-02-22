import { Fragment, useEffect, useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
  {
    "id":1,
    "titulo": "Fome",
    "prioridade": "3",
    "descricao": "Comer"
  },
  {
    "id":2,
    "titulo":"necessidades",
    "prioridade":"1",
    "descricao": "Cagar"
  },
];

function App() {


  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState(initialState);
  const [atividade, setAtividade] = useState({id:0});


  useEffect(() =>{
    atividades.length <= 0 ? setIndex(1) : 
    setIndex(Math.max.apply(Math, atividades.map(item => item.id)) + 1)
  }, [atividades])

    function addAtividade(ativ){

      setAtividades([...atividades
        , {...ativ, id: index}]);
    };


    function deletarAtividade(id){

      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
      setAtividades([...atividadesFiltradas])

    }

    function cancelarAtividade(){

      setAtividade({id:0})

    }

    function atualizarAtividade (ativ){

      setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
      setAtividade({id: 0})

    }


    function pegarAtividade(id){
      const atividade = atividades.filter((atividade) => atividade.id === id)
      setAtividade(atividade[0])
      console.log(atividade);
    }


  return (
    <Fragment>
      tete
      <AtividadeForm
      addAtividadeProp={addAtividade}
      atividadeSelecionada={atividade}
      atividades={atividades}
      atualizarAtividade={atualizarAtividade}
      cancelarAtividade={cancelarAtividade}
      />
    < AtividadeLista
      atividades={atividades}
      deletarAtividade={deletarAtividade}
      pegarAtividade={pegarAtividade}
    />   
    </Fragment>
    
  );
}

export default App;
