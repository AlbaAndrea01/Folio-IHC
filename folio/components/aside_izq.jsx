import Head from "next/head";
import React from "react";

const Aside_izq=({title}) =>{
    return(
        <div className="col-2 position-fixed h-100 p-0">
        <h3 className="text_ d-flex justify-content-center my-3">Sobre nosotros</h3>
       
        <div className="box">
        <h5>¿Quienes somos?</h5>
        <p>Somos un grupo de estudiantes, especificamente de 3 integrantes de la carrera de Ingenieria Informatica.</p>
        <p>Creadores de App Pycheche en la materia de IHC.</p>
        </div>
        <div className="box">
           
           <h5>Integrantes</h5>
            <li>Albi</li>
            <li>Reni</li>
            <li>Dalila</li>
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