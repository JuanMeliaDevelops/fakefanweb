import './css/main.scss'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function Connect(){

    const [mensajeEnviado, setMensajeEnviado]=  useState(false);

const mensajeEnviar = () => { setMensajeEnviado(true); }




    return (
        <div>
<h2>Connect with us</h2>
<p>leave your message</p>

<div className='formFrom'>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Button variant="dark" onClick={mensajeEnviar} >
    Submit
  </Button>
</Form>


</div>
{mensajeEnviado && <h6> <br/> Tu mensaje ha sido enviado con exito!</h6>}
        </div>
    )
}