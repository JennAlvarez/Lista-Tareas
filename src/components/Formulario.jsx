import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  // buscar datos del localstorage
  const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
  // aqui va la logica
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage);

  // ciclo de vida del componente
  useEffect(()=>{
     //console.log('prueba ciclo de vida')
    // guardar en el localstorage
    localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea))
  },[arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    // limpiar el input
    setTarea('');
  };

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTarea.filter((item)=>(item !== nombre))
    // actualizar el state
    setArregloTarea(arregloModificado)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>

      <ListaTareas propsArregloTarea = {arregloTarea} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default Formulario;
