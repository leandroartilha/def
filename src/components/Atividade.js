

export default function Atividade(props){
    

    function prioridadeLabel(param){
        switch(param){
          case '1':
            return 'Baixa';
          case '2':
            return 'Média';  
          case '3':
            return 'Alta';
          default:
            return 'Não Definido';
        }
  
      }
      
      function prioridadeStyle(param, icone){
        switch(param){
          case '1':
            return icone ? 'smile' : 'success';
          case '2':
            return icone ? 'meh' : 'warning';
          case '3':
            return icone ? 'frown' : 'danger';
          default:
            return '';
        }
  
      }
    
    return ( 


                <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(props.atividade.prioridade)}>
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <h5 className='card-title'>
                          <span className="badge text-bg-primary">{props.atividade.id} - {props.atividade.titulo}</span> 
                        </h5>
                        <h6 className={"text-" + prioridadeStyle(props.atividade.prioridade)}>
                          Prioridade : <i className={"far fa-" + prioridadeStyle(props.atividade.prioridade, true)}></i> {prioridadeLabel(props.atividade.prioridade)}
                        </h6>
                      </div>

                      <p className="card-text">{props.atividade.descricao}</p>
                      <div className='d-flex justify-content-end'>
                        <button 
                        className='btn btn-sm btn-outline-primary me-2'
                        onClick={() => props.pegarAtividade(props.atividade.id)}
                        >
                        <i className="far fa-pen me-2"></i>
                          Editar
                        </button>
                        <button 
                        className='btn btn-sm btn-outline-danger' 
                        onClick={() => props.deletarAtividade(props.atividade.id)}>
                        <i className="far fa-trash me-2"></i>
                          Deletar
                        </button>
                      </div>


                    </div>
                </div>
    )
}