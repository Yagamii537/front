import React from "react";
import { Link } from "react-router-dom";

export const Navigator = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <Link to={"/"} class="nav-item">
                        <p class="navbar-brand text-white" href="#">Inventario</p>
                    </Link>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">

                            <Link to={"/productos"} class="nav-item">
                                <p className="nav-link text-white">Productos</p>
                            </Link>
                            <Link to={"/busqueda"} class="nav-item">
                                <p className="nav-link text-white">Busqueda</p>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}