import React from "react";

const Button =({clase,contenido,accion})=>(

    <button className={clase} onClick={accion}>
        {contenido}
    </button>

)

export default Button;