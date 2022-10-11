import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";

const ListaTareas = ({propsArregloTarea, borrarTarea}) => {
  return (
    <ListGroup>
      {
        propsArregloTarea.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea> )
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
