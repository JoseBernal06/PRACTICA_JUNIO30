import React from "react";
import Fanesca from '../imagenes/fanesca.jpg';
import Hornado from '../imagenes/hornado.jpg';

function Home(){
    return(
        <div className="home">
            <div className="a">
                <img className="imagen_uno" src={Fanesca}></img>
            </div>
            <div className="descripcion_uno">
                <p>
                La fanesca es un guiso a base de granos tiernos y pescado seco que se prepara en Ecuador y el limítrofe 
                departamento colombiano de Nariño (Colombia) durante la cuaresma. Existe una serie de creencias y leyendas 
                que dan pistas sobre sus orígenes. 
                </p>
            </div>
            <div className="b">
                <img className="imagen_dos" src={Hornado}></img>
            </div>
            <div className="descripcion_dos">
                <p>
                El hornado, nombre que proviene de la palabra «hornear», es un plato típico de Ecuador. Se trata de un plato 
                que contiene carne de cerdo horneada,1​ principalmente es cocinada en leña, acompañada de distintas salsas y 
                vegetales cocidos, como por ejemplo choclo, llapingachos, plátano maduro frito, aguacate, lechuga, tomate y 
                demás ingredientes dependiendo la zona geográfica donde se lo prepare.
                </p>
            </div>
        </div>
    );
}
export default Home;