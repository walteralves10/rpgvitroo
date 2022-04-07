import React from "react";
import { useNavigate } from "react-router-dom";
import './ListaMesas.css'

export default function ListaMesas () {

  let navigate = useNavigate();

  const abrirMesa = () => {
    console.log('abrindo mesa');
    navigate('/lista');
  }

  return (
    <div>
      <div className="Item-container">
      
        <label className="Item-field">Item 1: Mesa </label>
        <button onClick={abrirMesa} >Abrir</button> 
        
      </div>
      
      <div className="Item-container">
        
        <label className="Item-field">Item 1: Mesa </label>
        <button onClick={abrirMesa} >Abrir</button> 
        
      </div>
    </div>
  );
}