import Atividade from "./Atividade"

export default function AtividadeLista(props){
    
    
    return (
        <div className="mt-3">
            <h1>Teste</h1>
            <ul className="list-group ml-3">
              {props.atividades.map(atividade => (

                  <Atividade
                  key={atividade.id}
                  atividade={atividade}
                  deletarAtividade={props.deletarAtividade}
                  pegarAtividade={props.pegarAtividade}
                  />

              ))}
              
            </ul>
        </div>
    )
}