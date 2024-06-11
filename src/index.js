import React from "react";
import ReactDOM from "react-dom/client"


const root = ReactDOM.createRoot(document.getElementById("root"));


function Soft(){
    return (<h1>SAPSOFT</h1>)   
}

function Header1(){
    return <h1>Módulo de Abastecimiento</h1>
}

function Line1(){
    return(<h2>Solicitar stock</h2>)
}

function Line2(){
    return (<h2>Receptar Stock</h2>)
}

function Line3(){
    return (<h2>Actualizar Stock</h2>)
}

function Header2(){
    return <h1>Módulo de ventas</h1>   
}

function Line4(){
    return (<h2>Registrar venta</h2>)
}

function Line5(){
    return (<h2>Generar órden de pedido</h2>)
}
//root.render(<h1>Hola Mundo</h1>);
root.render(
    <>
    <section><Soft/> </section>
    <section><Header1/> <Line1/> <Line2/> <Line3/> </section>
    <section><Header2/><Line4/><Line5/> </section>
    </>
    );