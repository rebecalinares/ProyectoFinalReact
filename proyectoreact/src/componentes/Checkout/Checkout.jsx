import { addDoc, doc, writeBatch, collection, getDoc, getFirestore } from "firebase/firestore";
import React, { useContext, useState} from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const Checkout = () => {
    const {carrito, sumaTotal, dropCart} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const genOrder = () => {
        const date = new Date()
        const orden = {
            cliente: {nombre:nombre, telefono:telefono, email:email},
            book: carrito.map((item) => ({id:item.id, titulo:item.nombre, cantidad:item.quantity, precio:item.precio, precio_total:item.quantity * item.precio})),
            total: sumaTotal(),
            order_date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "OC")
        addDoc(ordersCollection, orden).then((data) => {
            setOrdenId(data.id)

            const batch = writeBatch(db)

            carrito.forEach(item => {
                let producto = doc(db, "productos", item.id)
                getDoc(producto).then((data) => {
                    let datos_productos = data.data()
                    batch.update(producto, {stock:datos_productos.stock - item.quantity})
                    batch.commit()
                })
            })
            dropCart()
        })
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput= {(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono / Celular:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Telefono" onInput= {(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Email" onInput= {(e) => {setEmail(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={genOrder}>Generar Orden</button>  
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                                {
                                carrito.map(producto => (
                                    <tr key={producto.id}>
                                        <td><img src={producto.imagen} alt={producto.nombre} width={80} /></td>
                                        <td className="align-middle">{producto.nombre}</td>
                                        <td className="align-middle">{producto.quantity}</td>
                                        <td className="align-middle">${producto.quantity * producto.precio}</td>                                      
                                    </tr>
                                ))           
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="text-end"><b>Total a pagar:</b></td>
                                    <td className="text-end"><b>${sumaTotal()}</b></td>                             
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                                {ordenId !== "" ? <Navigate to={"/agradecimiento/" + ordenId}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;