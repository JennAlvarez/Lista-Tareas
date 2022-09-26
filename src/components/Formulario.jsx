import ListaTareas from "./ListaTareas";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
             Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default Formulario;
