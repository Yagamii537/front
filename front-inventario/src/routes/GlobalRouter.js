import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from "../components/Header";
import Landing from "../views/Landing";
import ProductoDetalle from "../views/ProductoDetalle";
import { NotFound } from "../views/NotFound";
import { Overview } from "../views/Overview";
import { Navigator } from "../components/Navigator";
import { Busqueda } from "../views/Busqueda";


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>} />
                <Route path="/productos" element={<Layout><Overview /></Layout>} />
                <Route path="/productos/:productoId" element={<Layout><ProductoDetalle /></Layout>} />
                <Route path="/busqueda" element={<Layout><Busqueda /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );

}

const Layout = ({ children }) => (
    <>
        <Navigator />
        <Header />
        {children}
    </>
);

export default GlobalRouter;