import {  collection, addDoc, Timestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { getData } from '../firebase';
import { useState, useEffect } from 'react';

import { useContext } from "react"
import { CartContext } from '../context/cartContext';

import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";





export default function CompraForm() {

    const [ordenRealizada, setOrdenRealizada] = useState(false);
    const [numeroCompra, setNumeroCompra] = useState();
    const [itemOrden, setItemOrden] = useState([]);

    const { itemAdded, setItemAdded } = useContext(CartContext);
    const { suma, setSuma } = useContext(CartContext);


    // Buyer

    const [activarBoton, setActivarBoton] = useState(true);

    const [email, setEmail] = useState();
    const [nombre, setNombre] = useState();
    const [dni, setDni] = useState();
    const [tarjeta, setTarjeta] = useState();
    const [telefono, setTelefono] = useState();
    const [direccion, setDireccion] = useState();


    // HABILITAR BOTON

    const botonHabilitar = () => {

        if (email !== '' && nombre !== '' && dni !== '' && tarjeta !== '' && telefono !== '' && direccion !== '')  {

            setActivarBoton(false);
        }

        else {
            setActivarBoton(true);
        }

    }

useEffect( ()=>{
    botonHabilitar();
},[]);



     // Fetch Orden de base de Datos
     const fetchOrden = async () => {
        const docRef = doc(getData(), "ordenes", `${numeroCompra}`);
        const docSnap = await getDoc(docRef);
        setItemOrden(docSnap);
    }

    

    const comprar = async () => {
 
            const docRef = await addDoc(collection(getData(), "ordenes"), {
                compra: itemAdded,
                buyer: { nombre: nombre, email: email, dni: dni, tarjeta: tarjeta, telefono: telefono, direccion: direccion },
                fecha: Timestamp.fromDate(new Date()),
                total: suma,
            });
            setNumeroCompra(docRef.id);
           

            //  Actualizar stock productos de base de Datos
            // const actualizarStock =  () => {
            //     await setDoc(doc(getData(), "productos", itemAdded.id), {
            //         stock: itemAdded.stock-itemAdded.quantity,
            //       });
            // }


            setOrdenRealizada(true);
            setTimeout(() => {
                setItemAdded([])
            }, 800)

        



    }




    if (ordenRealizada) {
        return (
            <div>

                <h2>Felicidades {nombre} tu compra se ha realizado con exito!</h2>
                <br />
                <h3>Tu orden de compra es: {numeroCompra}.</h3>
                <br />
                <h4>Te enviamos un mail de confirmacion junto a tus datos a: {email}.</h4>

                <div style={{ marginTop: '4%', marginBottom: '4%' }}>

                    {/* Mostrar Productos de compra desde la base de datos por la orden hacer en otra route */}
                    {/* {itemOrden.compra.length > 0 && itemOrden.compra.map(item => <div key={item.title}> <h5>x{item.quantity} {item.title}: ${item.price}</h5></div>)} */}
                  
                    <h4>Total: ${suma}</h4>
                    <br/>   <br/>
                    <Link to='/category'><Button variant='dark'>Volver a la tienda </Button> </Link>

                </div>

            </div>
        )
    }



    return (
        <div>
            <h1>Finaliza tu compra!</h1>

            <div style={{ marginTop: '4%', marginBottom: '4%' }}>

                {itemAdded.length > 0 && itemAdded.map(item => <div key={item.title}> <h5>x{item.quantity} {item.title}: ${item.price}</h5></div>)}
                <h4>Total: ${suma}</h4>

            </div>

            <Form style={{ width: '30vw', margin: 'auto' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Dni</Form.Label>
                    <Form.Control type="number" placeholder="Dni" onChange={(event) => setDni(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Numero de tarjeta</Form.Label>
                    <Form.Control type="number" placeholder="Tarjeta de credito" onChange={(event) => setTarjeta(event.target.value)} />
                    <Form.Text className="text-muted">
                        Tus datos no seran compartidos con nadie.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Numero de telefono</Form.Label>
                    <Form.Control type="tel" placeholder="Telefono" onChange={(event) => setTelefono(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Direccion" onChange={(event) => setDireccion(event.target.value)} />
                </Form.Group>

                
                <Button variant="dark" onClick={comprar} disabled={activarBoton}> Confirmar compra </Button>


            </Form>




        </div>
    )
}