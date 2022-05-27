import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/Api";
//import './ListaMesas.css'

export default function ListaMesas () {

  const [mesas, setMesas] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    getMesas();
  }, []);

  const getMesas = async () => {
    const obtemMesas = await API.get('/mesas');
    setMesas(obtemMesas.data);
  };

  const abrirMesa = (id) => (e) => {
    e.preventDefault();
    navigate(`/lista/${id}`);
  };

  const deletarMesa = (id) => async (e) => {
    e.preventDefault();
    //api
    await API.delete(`/mesas_personagens/${id}`);
    getMesas();
  };

  return (
    
    <div className="container">
        {mesas.map((mesa) => 
        <div key={mesa.id} className="box m-4 is-flex is-flex-direction-row is-justify-content-space-between">
          <p className="title is-5">{mesa.id}: {mesa.nome} </p>
          <div>
            <button className="button" onClick={abrirMesa(mesa.id)} >Abrir</button>
            
            <span className="tag is-danger is-large">
              <button className="delete" onClick={deletarMesa(mesa.id)}></button>
            </span> 

          </div>
        </div>
        )}
    </div>

  );
}