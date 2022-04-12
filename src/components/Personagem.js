import { useState} from 'react';
import './Personagem.css';

function Personagem(props) {

    const [cal, setCal] = useState(0);

    const soma = (e) => {
      e.preventDefault();
      const vida_atual = props.dados.ponto_vida_atual_personagem;
      onChangeForm('ponto_vida_atual_personagem')({ target: { value: parseInt(vida_atual) + parseInt(cal) }});
    };
    
    const subtrai = (e) => {
      e.preventDefault();
      const vida_atual = props.dados.ponto_vida_atual_personagem;
      onChangeForm('ponto_vida_atual_personagem')({ target: { value: parseInt(vida_atual) - parseInt(cal) }});
    };
  
    const handleChangeCalcular = (v) => {
      setCal(v.target.value);
    };

    const onChangeForm = (key) => (e) => {
      props.onChangePersonagem({...props.dados,[key]: e.target.value}, props.index);
    };

    return (
      <form className="Label"> 
        <div>
            <label>
              Nome: 
              <input 
                  type="text" 
                  placeholder='Sim'
                  value={props.dados.nome_personagem ?? ''} 
                  onChange={onChangeForm('nome_personagem')} 
              />
            </label>
        </div>
        
        <div>
            <label>
              PV Total: 
              <input 
                  type="number" 
                  placeholder='Total'
                  value={props.dados.ponto_vida_total_personagem ?? 0} 
                  onChange={onChangeForm('ponto_vida_total_personagem')}
              />
            </label>
        </div>
        
        <div>
            <label>
              PV Atual: 
                <input className='InputAtual' 
                    type="number" 
                    placeholder='Atual'
                    value={props.dados.ponto_vida_atual_personagem  ?? 0} 
                    onChange={onChangeForm('ponto_vida_atual_personagem')}
                />
            </label>
        
          <input 
            className='InputCal'
            type="number" 
            placeholder='calc...'
            value={cal} 
            onChange={handleChangeCalcular} 
          />
          
          <button 
            className='ButtonSoma'
            onClick={soma}
          >
              +
          </button>
          
          <button 
            className='ButtonSubtrai'
            onClick={subtrai}
          >
              -
          </button>     
        
        </div>
        
        <div style={{paddingTop: '15px'}}>
          <label style={{display: 'inline-grid'}}> 
            FOR
            <input 
              type="number"
              className='InputCal'
              value={props.dados.forca_personagem  ?? 0} 
              onChange={onChangeForm('forca_personagem')}
            />
          </label>
          <label style={{display: 'inline-grid'}}> 
            DES
            <input 
              type="number"
              className='InputCal' 
              value={props.dados.destreza_personagem  ?? 0} 
              onChange={onChangeForm('destreza_personagem')}
            />
          </label>
          <label style={{display: 'inline-grid'}}> 
            CON
            <input 
              type="number"
              className='InputCal' 
              value={props.dados.constituicao_personagem  ?? 0} 
              onChange={onChangeForm('constituicao_personagem')}
            />
          </label>
        </div>

        <div>
          <label style={{display: 'inline-grid'}}> 
            INT
            <input 
              type="number"
              className='InputCal' 
              value={props.dados.inteligencia_personagem  ?? 0} 
              onChange={onChangeForm('inteligencia_personagem')}
            />
          </label>
          <label style={{display: 'inline-grid'}}> 
            SAB
            <input 
              type="number"
              className='InputCal' 
              value={props.dados.sabedoria_personagem  ?? 0} 
              onChange={onChangeForm('sabedoria_personagem')}
            />
          </label>
          <label style={{display: 'inline-grid'}}> 
            CAR
            <input 
              type="number"
              className='InputCal' 
              value={props.dados.carisma_personagem  ?? 0} 
              onChange={onChangeForm('carisma_personagem')}
            />
          </label>
        </div>

        <div className='DivTextArea'>
          <label>
            Descrição: 
            <textarea 
              type="text"
              className='TextAreaDescricao'
              value={props.dados.descricao_personagem  ?? ''} 
              onChange={onChangeForm('descricao_personagem')}
            />
          </label>
        </div>
        
      </form>
    );
  }
  
  export default Personagem;