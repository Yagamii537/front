import { useEffect,useState } from "react";

export const useProductos=()=>{
    const [productos, setProductos]=useState([]);

    useEffect(()=>{
        setTimeout(() => {
           setProductos([
            {id:"1",name:"Rompecabezas", precio:1.5, stock:50},
            {id:"2",name:"Cubo Rubick", precio:3, stock:60},
            {id:"3",name:"Cubos de Encaje", precio:7, stock:15},
            {id:"4",name:"Laberintos", precio:9, stock:20},
            {id:"5",name:"Tableros", precio:12, stock:45},
            {id:"6",name:"Rompecabezas 3D", precio:5.5, stock:8},
            {id:"7",name:"Juegos de Pesca", precio:15, stock:9},
            {id:"8",name:"Encaje de Figuras Geometricas", precio:13, stock:13},
            {id:"9",name:"Ajedrez", precio:5, stock:40},
            {id:"10",name:"Jenga", precio:10, stock:20},
            
            {id:"11",name:"Rompecabezas 50 piezas", precio:20, stock:40},
            {id:"12",name:"Rompecabezas 100 piezas", precio:25, stock:60},
            {id:"13",name:"Rompecabezas 200 piezas", precio:30, stock:15},
            {id:"14",name:"Mochilas", precio:15, stock:30},
            {id:"15",name:"3 en raya", precio:3, stock:45},
            {id:"16",name:"Monopolios", precio:35, stock:18},
            {id:"17",name:"Cartas", precio:1.5, stock:100},
            {id:"18",name:"Armables", precio:5, stock:20},
            {id:"19",name:"Damas Chinas", precio:7, stock:10},
            {id:"20",name:"Canicas", precio:0.1, stock:500},

            {id:"21",name:"Pizzarra", precio:1.5, stock:50},
            {id:"22",name:"Libro de lectura", precio:3, stock:60},
            {id:"23",name:"Libro matematica", precio:7, stock:15},
            {id:"24",name:"Organigramas", precio:9, stock:20},
            {id:"25",name:"Tangram", precio:12, stock:45},
            {id:"26",name:"Rompecabezas 3D Grandes", precio:5.5, stock:8},
            {id:"27",name:"Plastina", precio:15, stock:9},
            {id:"28",name:"Arena Magica", precio:13, stock:13},
            {id:"29",name:"Kit de herramientas practicas", precio:5, stock:40},
            {id:"30",name:"Fomix moldeable", precio:10, stock:20},

            {id:"31",name:"Juego de motricidad fina", precio:1.5, stock:50},
            {id:"32",name:"Juego de matematicas", precio:3, stock:60},
            {id:"33",name:"Atomos flexibles", precio:7, stock:15},
            {id:"34",name:"Numeros de enhebrar", precio:9, stock:20},
            {id:"35",name:"Letras de enhebrar", precio:12, stock:45},
            {id:"36",name:"Domino didactico", precio:5.5, stock:8},
            {id:"37",name:"Domino normal", precio:15, stock:9},
            {id:"38",name:"Sudoku de animales", precio:13, stock:13},
            {id:"39",name:"Sudoku normal", precio:5, stock:40},
            {id:"40",name:"Pelota antiestres", precio:10, stock:20},

            {id:"41",name:"Domino de numeros", precio:1.5, stock:50},
            {id:"42",name:"Domino de alfabeto", precio:3, stock:60},
            {id:"43",name:"Muñecas plasticas", precio:7, stock:15},
            {id:"44",name:"Juegos de cocina", precio:9, stock:20},
            {id:"45",name:"Pato de argolla", precio:12, stock:45},
            {id:"46",name:"Pelota de argolla", precio:5.5, stock:8},
            {id:"47",name:"Juego de imanes", precio:15, stock:9},
            {id:"48",name:"Kit musical", precio:13, stock:13},
            {id:"49",name:"IcuGames", precio:5, stock:40},
            {id:"50",name:"Legos", precio:10, stock:20},
           ]) ;
        }, 2500);

    },[]);

    return productos;
}