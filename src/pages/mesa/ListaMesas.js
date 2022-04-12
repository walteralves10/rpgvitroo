import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/Api";
import './ListaMesas.css'

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

    //console.log('abrindo mesa');
    navigate(`/lista/${id}`);
  };

  return (
    <div>

      {mesas.map((mesa) => 
        <div key={mesa.id_mesa} className="Item-container">
          <label className="Item-field">{mesa.id_mesa}: {mesa.nome_mesa} </label>
          <button onClick={abrirMesa(mesa.id_mesa)} >Abrir</button>
        </div>
      )}

    </div>
  );
}