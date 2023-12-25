import React from "react";
import Button from "./Button";

export const FormSearch = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <input class="form-control" placeholder="Ingrese Producto" />
                </div>
                <div class="form-group">
                    <Button clase="btn btn-outline-primary my-2" type="submit" contenido="Buscar"/>
                </div>
            </form>
        </div>

    );
}