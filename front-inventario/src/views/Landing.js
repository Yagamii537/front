import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Landing.css";



function Landing() {
    
    
    return (
        
        
        <div className="landing">
            <Link to={"/productos"}>
                <h1>BIENVENIDOS</h1>
            </Link>
        </div>
        
    );

}

export default Landing;