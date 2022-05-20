import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import './ListaPersonagens.css';

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

  // const onChangePersonagem = (dados, index) => {
  //   const personagens = [...listaPersonagem];
  //   personagens[index].dados = dados;
    
  //   setListaPersonagem(personagens);
  // };

  // const onSubmit = (personagens) => (e) => {
  //   API.post(`/personagens/${id_mesa}`, personagens).then(res => {
  //     alert('Personagens salvos!');
  //   }).catch(err => {
  //     alert('Erro ao salvar!');
  //     console.log(err);
  //   });
  //   console.log(personagens);
  //   e.preventDefault();
  // };

  const obtemPersonagens = async () => {
    
    //Alterar forma de busca dos personagens
    const personagemUnicaMesa = await API.get(`/mesas_personagens/${id_mesa}`);
    const personagem = []; 

    personagemUnicaMesa.data.forEach((pers, index) => {
      personagem[index] = {pagina: index, dados: pers};
    });

    setContador(personagem.length);
    setListaPersonagem(personagem);
  }

  const alterarPersonagem = (dados) => (e) => {
    e.preventDefault();
    // precisa colocar o async-await?
    if (dados.id_personagem) {

      API.put(`/personagens/${dados.id_personagem}`, dados).then(res => {
        alert(`${dados.nome} alterado!`);
      }).catch(err => {
        alert('Erro ao alterar!');
        console.log(err);
      });

    } else {

      API.post(`/personagens/${id_mesa}`, dados).then(res => {
        alert('Personagens salvos!');
      }).catch(err => {
        alert('Erro ao salvar!');
        console.log(err);
      });

    }

    obtemPersonagens();
    
  }

  const deletarPersonagem = (id_personagem, id_mesa) => async (e) => {
    e.preventDefault();

    await API.delete(`/personagens/${id_personagem}/${id_mesa}`);
    alert('Personagem deletado!');
    obtemPersonagens();
  }

  useEffect(() => {
    obtemPersonagens();
  }, [])

  return (
    <div className=''>
      
      <div style={{textAlign: 'end'}}>
        <button className='button' onClick={novaAbaOnClick}>+</button>
        {/* <button className='button' onClick={onSubmit}>Salvar</button> */}
      </div>

      <div className='is-flex is-flex-direction-row is-flex-wrap-wrap'>
        {listaPersonagem.map((personagem, p_index) =>
          <div className='column is-3' key={p_index}>
            
              <p className='title' key={personagem.pagina}>Personagem {p_index}</p>
              {<Personagem  
                  index={p_index} 
                  dados={personagem.dados} 
                  // onChangePersonagem={onChangePersonagem} 
                  // onSubmit={onSubmit}
                  alterarPersonagem={alterarPersonagem}
                  deletarPersonagem={deletarPersonagem}
                />
              }
            
          </div>
        )} 
      </div>

    </div>    
    
  );
}

export default ListaPersonagens;
