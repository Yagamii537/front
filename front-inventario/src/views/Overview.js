import React, { useContext } from 'react';

import { Body } from "../components/Body";
import { ProductoContext } from "../context/ProductoContext";


export const Overview = () => {

    const { productos } = useContext(ProductoContext);
    
    return (
        <div>
            <h2 className="text-center">Productos Disponibles</h2>
            <div className="producto-container">
                {
                    productos.length > 0 ? (
                        productos.map((producto, index) => (
                            
                            <Body
                                key={index}
                                id={producto.id}
                                name={producto.name}
                                precio={producto.precio}
                                stock={producto.stock}
                            />                            
                        ))

                    ) : (
                        <p color="secondary text-center">Cargando datos, espere un momento</p>
                    )
                }
                

            </div>
        </div >
    );
}