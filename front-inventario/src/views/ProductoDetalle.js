import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import '../styles/Detalle.css';
import { ProductoContext } from "../context/ProductoContext";


const ProductoDetalle =()=>{
    const {productoId}=useParams();
    const {productos}=useContext(ProductoContext);
    let { globalContador, updateContador,updateDelContador } = useContext(ProductoContext);

    const producto=productos.find(p=>p.id===productoId);

    if(!producto){
        return <h2>Producto no encontrado</h2>
    }
    console.log(producto.name);

    return(
        <div className="producto-details">
            <h2 className="producto-name">{producto.name}</h2>
            <p className="producto-precio">Precio: {producto.precio}</p>
            <p className="producto-stock">Stock: {producto.stock+globalContador}</p>
            
        </div>
            
    );

}

export default ProductoDetalle;
