import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';

let id=0;

function todoAPP(){
    return(
        <Container>
            <Row>
                <h3>Tareas pendientes</h3>
            </Row>
            <Row>
                <ul id='recipiente' classsName="mx-3">

                </ul>
            </Row>
            <Form classsName="container">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>¿Que se necesita hacer?</Form.Label>
                    <Form.Control type="text" placeholder="" id='txt'/>
                </Form.Group>
                <Button variant="primary" id='btnAdd' type="button" onClick={addNote}>
                    Añadir #{id + 1}
                </Button>
            </Form>
        </Container>
    );
}

function addNote(){
    let text = document.getElementById('txt').value;
    let ul = document.getElementById('recipiente');
    let li = document.createElement('li');
    li.append(text);
    li.classList.add('fs-3');
    ul.append(li);
    id++;
    console.log(id);

    let boton = document.getElementById('btnAdd');
    boton.innerText = "Añadir #" + (id+1);
}


export default todoAPP;