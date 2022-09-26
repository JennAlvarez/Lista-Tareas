import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Container className='my-3'>
      <h1 className="display-4">Lista de tareas</h1>
      <hr/>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
