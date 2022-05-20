import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return(
      <div className="">

        <nav className="navbar" role="navigation" aria-label="main navigation">

        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
            <h1 className="navbar-item">RPG do Vitras</h1>
          </a>
          

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">

            <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Mesas
              </p>

              <div className="navbar-dropdown">

                <Link className="navbar-item" to="/mesa">
                  Adicinar mesa
                </Link>

                <hr className="navbar-divider" />

                <Link className="navbar-item" to='/listamesas'>
                  Listar mesas
                </Link>

              </div>
            </div>
          </div>

        </div>
        </nav>

      </div>
    );
}