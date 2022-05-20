import { useEffect, useState} from 'react';
//import './Personagem.css';
//import img from '../assets/img/Icone_Barto_2.png';

function Personagem(props) {

    const [dados, setDados] = useState({});

    useEffect(() => {
      setDados(props.dados);
    }, [props.dados]);

    const [cal, setCal] = useState(0);

    const soma = (e) => {
      e.preventDefault();
      const vida_atual = dados.ponto_vida_atual;
      onChangeForm('ponto_vida_atual')({ target: { value: parseInt(vida_atual) + parseInt(cal) }});
    };
    
    const subtrai = (e) => {
      e.preventDefault();
      const vida_atual = dados.ponto_vida_atual;
      onChangeForm('ponto_vida_atual')({ target: { value: parseInt(vida_atual) - parseInt(cal) }});
    };
  
    const handleChangeCalcular = (v) => {
      setCal(v.target.value);
    };

    const onChangeForm = (key) => (e) => {
      //props.onChangePersonagem({...dados,[key]: e.target.value}, props.index);
      setDados(old => ({...old, [key]: e.target.value}));
    };

    return (
      <form className="box m-2"> 

        {/* <img src={img} /> */}

        <div className='column'>
            <label className='label'>Nome: </label>
              <input
                className='input'
                type="text" 
                placeholder='Sim'
                value={dados.nome ?? ''} 
                onChange={onChangeForm('nome')} 
              />
            
        </div>
        
        <div className='column'>
            <label className='label'>PV Total: </label>
              <input
                className='input' 
                type="number"
                  placeholder='Total'
                  value={dados.ponto_vida_total ?? 0} 
                  onChange={onChangeForm('ponto_vida_total')}
              />
            
        </div>
        
        <div className='column'>
          <label className='label'>PV Atual: </label>
        </div>
        <div className='columns'>

          <div className='column'>
            <input
                className='input'
                type="number"
                placeholder='Atual'
                value={dados.ponto_vida_atual  ?? 0} 
                onChange={onChangeForm('ponto_vida_atual')}
            />
          </div>

          <div className='column'>
            <input
                className='input'
                type="number" 
                placeholder='calc...'
                value={cal} 
                onChange={handleChangeCalcular} 
              />
          </div>

          
          <div className='column'>
            <button 
              className='button'
              onClick={soma}
            >
                +
            </button>
            
            <button 
              className='button'
              onClick={subtrai}
            >
                -
            </button>  
          </div>
        
        </div>
        
        <div className='columns'>

          <div className='column'>
            <label className='label'>FOR</label>
            <input
              className='input'
              type="number"
              value={dados.forca  ?? 0} 
              onChange={onChangeForm('forca')}
            />
          </div>

          <div className='column'>
          <label className='label'>DES</label>
            <input
              className='input'
              type="number"
              value={dados.destreza  ?? 0} 
              onChange={onChangeForm('destreza')}
            />
          </div>
          
          <div className='column'>
          <label className='label'>CON</label>
            <input
              className='input'
              type="number"
              value={dados.constituicao  ?? 0} 
              onChange={onChangeForm('constituicao')}
            />
          </div>
          
        </div>

        <div className='columns'>

          {/* <div> */}
          <div className='column'>
          <label className='label'>INT</label>
            <input
              className='input'
              type="number"
              value={dados.inteligencia  ?? 0} 
              onChange={onChangeForm('inteligencia')}
            />
          </div>
          
          <div className='column'>
            <label className='label'>SAB</label>
              <input
                className='input'
                type="number"
                value={dados.sabedoria  ?? 0} 
                onChange={onChangeForm('sabedoria')}
              />
          </div>
            
            <div className='column'>
              <label className='label'>CAR</label>
              <input
                className='input'
                type="number"
                value={dados.carisma  ?? 0} 
                onChange={onChangeForm('carisma')}
              />  
            </div>            
            
          {/* </div> */}

        </div>

        <div className='column'>
          <label className='label'>Descrição</label>
          <textarea 
            type="text"
            className='textarea'
            value={dados.descricao  ?? ''} 
            onChange={onChangeForm('descricao')}
          />
        </div>

        <div className='column is-flex is-justify-content-space-between'>
          <button className="button is-warning" onClick={props.alterarPersonagem(dados)} >Salvar</button>
          <button className="button is-danger" onClick={props.deletarPersonagem(dados.id_personagem, dados.id_mesa)} >Apagar</button>
        </div>
        
      </form>
    );
  }
  
  export default Personagem;