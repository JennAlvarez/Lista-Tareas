import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";

const ListaTareas = ({propsArregloTarea}) => {
  return (
    <ListGroup>
      {
        propsArregloTarea.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea={tarea}></ItemTarea> )
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
