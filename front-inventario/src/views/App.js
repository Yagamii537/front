import React, { useState } from 'react';
import GlobalRouter from "../routes/GlobalRouter";
import { Footer } from '../components/Footer';
import { useProductos } from '../hooks/useProductos';
import { ProductoContext } from '../context/ProductoContext';

export const App = () => {

  const productos = useProductos();

  const [globalContador, setGlobalContador]=useState(0);

  let updateContador =()=>{
    setGlobalContador(globalContador+1);
  }

  let updateDelContador =()=>{
    setGlobalContador(globalContador-1);
  }

  return (
    
      <ProductoContext.Provider value={{ productos,globalContador,updateContador,updateDelContador }}>
        
        <GlobalRouter></GlobalRouter>        
        <Footer />
      </ProductoContext.Provider>
   
  );
}

export default App;
