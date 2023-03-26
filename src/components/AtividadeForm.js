import { useEffect, useState } from "react";

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props){
    
    const [atividade, setAtividade] = useState(atividadeAtual())

    useEffect(() =>{
        if(props.atividadeSelecionada.id !== 0){
            setAtividade(props.atividadeSelecionada)
        }
    }, [props.atividadeSelecionada])

 
    const inputTextHandler = (e) =>{
        const {name, value} = e.target;
        
        setAtividade({...atividade, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(props.atividadeSelecionada.id !== 0){
            props.atualizarAtividade(atividade);
        }
        else{
            props.addAtividadeProp(atividade);
        }
        setAtividade(atividadeInicial);
    }


    const handleCancelar = (e) =>{
        e.preventDefault();

        setAtividade(atividadeInicial);
    }


    function atividadeAtual(){
        if(props.atividadeSelecionada.id !== 0){
            return props.atividadeSelecionada;
        }else{
            return atividadeInicial;
        }
    }
    
    return ( <div>
                <form className="row g-3 mt-5" onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label className='form-label'>Título</label>
                    <input 
                    className='form-control' 
                    name="titulo"
                    value={atividade.titulo}
                    onChange={inputTextHandler}
                    id='titulo' type='text' 
                    placeholder='Título'></input>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Prioridade</label>
                        <select 
                        id="prioridade" 
                        className="form-select"
                        name="prioridade"
                        value={atividade.prioridade}
                        onChange={inputTextHandler}
                        >
                        
                            <option defaultValue="0">Selecionar ...</option>
                            <option value="Baixa">Baixa</option>
                            <option value="Normal">Normal</option>
                            <option value="Alta">Alta</option>
                        </select>
                </div>

                <div className='col'>
                    <label className='form-label'>Descrição</label>
                    <textarea 
                    className='form-control' 
                    name="descricao"
                    value={atividade.descricao}
                    onChange={inputTextHandler}
                    id='descricao' 
                    type='text' 
                    placeholder='Descrição'></textarea>


                </div>
                <hr/  >
                <div className="col-12">
                    {
                    atividade.id === 0 || undefined ? (
                    <button 
                    type="submit" 
                    className="btn btn-primary">+ Atividade</button>
                    ):(
                        <>
                    <button 
                    type="submit" 
                    className="btn btn-primary me-2">Salvar</button>
                    
                    <button 
                    onClick={handleCancelar} 
                    className="btn btn-primary">Cancelar</button>
                        </>
                    )}
                </div>

            </form>
    </div>
    )
}