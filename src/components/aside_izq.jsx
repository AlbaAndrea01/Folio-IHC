import Head from "next/head";
import React from "react";

const Aside_izq=({title}) =>{
    return(
        <div className="col-2 aside position-fixed h-100 p-0">
    
        <div className="box">
        <h3 className="text_ d-flex justify-content-center my-3">Sobre nosotros</h3>
        <h5>¿Quienes somos?</h5>
        <p>Somos un grupo de estudiantes de la carrera de Ingenieria Informatica de la Universidad Nacional de Itapúa.</p>
        <p>Creadores de App Pycheche para la la materia de Interaccion Humano-Computadora.</p>
        <p>2021-2022</p>
        </div>
        <div className="box">
           
           <h5>Integrantes</h5>
            <li>Alba Esquivel</li>
            <li>Sebastian Caballero</li>
            <li>Dalila Castelnovo</li>
        </div>
        <style jsx>{`
            div {
                background:  white;
            }
        
            h5{
                color:rgb(31, 29, 29);
            }
            .box {
                margin-top: 5px;
                color: rgb(68, 65, 65);
                padding: 8px 10px;
                border-top: 0.5px solid rgb(50, 50, 50);
                font-size: 14px;
                font-weight: 600;
            }
          
        `}</style>
    </div>
);
};

export default Aside_izq;