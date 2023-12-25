import React, { useContext, useEffect } from 'react';
import '../styles/Body.css';
import { Link } from "react-router-dom";
import Button from "./Button";
import { ProductoContext } from "../context/ProductoContext";


export const Body = ({ id, name, precio, stock }) => {

    const { globalContador, updateContador,updateDelContador } = useContext(ProductoContext);


    useEffect(() => {
        console.log("Se esta haciendo algo :V");
    }, [globalContador]);

    return (

        <div className="card bg-dark">
            <p className="text-white">{name}</p>
            <p>Precio: {precio}</p>
            <p>stock: {globalContador + stock}</p>
            <Link>
                <Button
                    clase="btn btn-success"
                    contenido={"+"}
                    accion={() => updateContador()} />
            </Link>

            <Link>
                <Button
                    clase="btn btn-danger"
                    contenido={"-"}
                    accion={() => updateDelContador()} />
            </Link>


            <Link to={`/productos/${id}`}>
                <Button
                    clase="btn btn-primary"
                    contenido="Ver detalle" />
            </Link>








        </div>
    );
}