import { useState } from 'react';
import './ListaPersonagens.css';
import Personagem from './components/Personagem';

function ListaPersonagens() {

  const [contador, setContador] = useState(0);
  const [listaAba, setListaAba] = useState([]);

  function novaAbaOnClick() {
    
    setContador(contador + 1);
    
    setListaAba([...listaAba,
                {pagina: contador}
               ]);
  };

  return (
    <div className='ListaPersonagens'>
      <table>
        <thead className='Head'>
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
