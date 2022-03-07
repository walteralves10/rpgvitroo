import { useState } from 'react';
import './Personagem.css';

function Personagem() {

    //const [total, setTotal] = useState(0);
    const [atual, setAtual] = useState(0);
    const [cal, setCal] = useState(0);
  
  
    const somaPVAtual = () => {
      let aux = atual;
      aux = parseFloat(cal)  + parseFloat(atual);
      setAtual(aux);
    }
    const subtraiPVAtual = () => {
      let aux = atual;
      aux = parseFloat(atual) - parseFloat(cal);
      setAtual(aux);
    }
  
    const handleChangeCalcular = (v) => {
      setCal(v.target.value);
    }
  
    const handleChangeAtual = (v) => {
      setAtual(v.target.value);
    }
  
    return (
      <div className="Label">     
        <div>
            <label>
            Nome: 
            <input 
                type="text" 
                placeholder='Sim'
                // value={this.state.value} 
                // onChange={this.handleChange} 
                />
            </label>
        </div>
        
        <div>
            <label>
            PV Total: 
            <input 
                type="text" 
                placeholder='Total'
                //value={total} 
            // onChange={this.handleChange} 
            />
            </label>
        </div>
        
        <div>
            <label>
            PV Atual: 
                <input className='InputAtual' 
                    type="text" 
                    placeholder='Atual'
                    value={atual} 
                    onChange={handleChangeAtual} 
                />
            </label>
        
          <input 
            className='InputCal'
            type="text" 
            placeholder='calc...'
            value={cal} 
            onChange={handleChangeCalcular} 
          />
          
          <button 
            className='ButtonSoma'
            onClick={somaPVAtual}>
              +
          </button>
          
          <button 
            className='ButtonSubtrai'
            onClick={subtraiPVAtual}>
              -
          </button>        
        
        </div>
      </div>
    );
  }
  
  export default Personagem;