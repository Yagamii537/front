import React from "react";
import { FormSearch } from "../components/FormSearch";

export const Busqueda = () => {
    return (
        <div>
            <h2 className="text-center">Busqueda de Productos</h2>
            <div className="producto-container">
                <FormSearch />                
            </div>
        </div>
    )

}