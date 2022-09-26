import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const Formulario = () => {
  // aqui va la logica
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTarea([...arregloTarea, tarea]);
    // limpiar el input
    setTarea('');
  };

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

      <ListaTareas propsArregloTarea = {arregloTarea}></ListaTareas>
    </div>
  );
};

export default Formulario;
