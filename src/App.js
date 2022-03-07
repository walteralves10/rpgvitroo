import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [total, setTotal] = useState(0);
  const [soma, setSoma] = useState(0);
  const [atual, setAtual] = useState(0);
  const [cal, setCal] = useState(0);


  const somaPVAtual = () => {
    let aux = cal + atual;
    setAtual(aux);
    console.log(aux);
  }
  const subtraiPVAtual = () => {
    console.log('-');
    //let aux += ;
    //setTotal();
  }

  const handleChangeCalcular = (v) => {
    setCal(v);
  }

  const handleChangeAtual = (v) => {
    setAtual(v);
  }

  return (
    <div className="App" style={{}}>     
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
        value={total} 
        // onChange={this.handleChange} 
        />
      </label>
      </div>
      
      <div>
      <label>
        PV Atual: 
        <input 
        type="text" 
        placeholder='Atual'
        value={atual} 
        onChange={handleChangeAtual} 
        />
        <input 
        type="text" 
        placeholder='calcular'
        value={soma} 
        onChange={handleChangeCalcular} 
        />
        <button 
          onClick={somaPVAtual}>
            +
        </button>
        <button 
          onClick={subtraiPVAtual}>
            -
        </button>        
      </label>
      </div>
      
      
      
    </div>
  );
}

export default App;
