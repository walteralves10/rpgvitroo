import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return(
    <div>
      <h1>Central RPG</h1>
      <navbar>
        <Link to="/mesa" > Adicionar Mesa </Link> |{" "}
        {/* <Link to="/lista"> Listar Personagens</Link> |{" "} */}
        <Link to='/listamesas'>Listar Mesas</Link>
      </navbar>
    </div>
    );
}