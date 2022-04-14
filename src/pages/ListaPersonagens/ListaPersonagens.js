import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListaPersonagens.css';

import API from '../../services/Api';
import Personagem from '../../components/Personagem';

function ListaPersonagens() {

  const {id_mesa} = useParams();
  const [contador, setContador] = useState(0);
  const [listaPersonagem, setListaPersonagem] = useState([]);

  const novaAbaOnClick = () => {
    
    setContador(contador + 1);
    
    setListaPersonagem([...listaPersonagem,
                {pagina: contador,
                 dados: {}
                }
               ]);
  };

  const onChangePersonagem = (dados, index) => {
    const personagens = [...listaPersonagem];
    personagens[index].dados = dados;
    personagens[index].dados.fk_id_mesa_personagem = id_mesa;
    setListaPersonagem(personagens);
  };

  const onSubmit = (e) => {
    listaPersonagem.forEach((personagem, i) => {
      console.log(personagem.dados);
      API.post('/personagens', personagem.dados);
    });
    alert('Personagens salvos!');
    e.preventDefault();
  };

  const obtemPersonagens = async () => {
    
    const personagemUnicaMesa = await API.get(`/personagens/${id_mesa}`);
    const personagem = []; 

    personagemUnicaMesa.data.forEach((pers, index) => {
      personagem[index] = {pagina: index, dados: pers};
    });

    console.log('personagem:');
    console.log(personagem);
    
    setListaPersonagem(personagem);
  }

  useEffect(() => {
    obtemPersonagens();
  }, [])

  return (
    <div className='ListaPersonagens'>
      <table>
        <thead className='Head'>
          <tr>
              { listaPersonagem.map((value, index) =>
                 <th key={value.pagina}>Personagem {value.pagina}</th>
              )} 

            <th>
              <button onClick={novaAbaOnClick}>+</button>
              <button onClick={onSubmit}>Salvar</button>
            </th>
          </tr>
          
        </thead>

        <tbody>
          <tr>
              { listaPersonagem.map((personagem, p_index) =>
                <td className='Coluna' key={p_index}>{<Personagem  
                                      index={p_index} 
                                      dados={personagem.dados} 
                                      onChangePersonagem={onChangePersonagem} 
                                      onSubmit={onSubmit}
                                   />
                                  }
                 </td>
              )} 
          </tr>
          
        </tbody>
      </table>
    </div>    
    
  );
}

export default ListaPersonagens;
