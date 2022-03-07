import { useState } from 'react';
import './App.css';
import Personagem from './components/Personagem';

function App() {

  const [contador, setContador] = useState(0);
  const [listaAba, setListaAba] = useState([]);

  function novaAbaOnClick() {
    
    setContador(contador + 1);
    
    setListaAba([...listaAba,
                {pagina: contador}
               ]);
  };

  //console.log(contador);

  return (
    <div>
      <table>
        <thead>
          <tr>
            
          
              { listaAba.map((value) =>
                <th key={value.pagina}>Personagem {value.pagina}</th>
              )} 

            <th>
              <button onClick={novaAbaOnClick}>+</button>
            </th>
          </tr>
          
        </thead>

        <tbody>
          <tr>
              { listaAba.map((value) =>
                <td key={value.pagina}>{<Personagem/>}</td>
              )} 
          </tr>
          
        </tbody>
      </table>
    </div>    
    
  );
}

export default App;
