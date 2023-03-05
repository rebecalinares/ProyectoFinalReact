import React from 'react'
import { useState, useContext, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from "../CartContext/CartContext";

export const ItemDetail = ({ listBooks }) => {

    const { addItem } = useContext(CartContext);

    const [productoStock, setProductoStock] = useState(0);

    const { imagen, nombre, precio, autor, stock, genero, sinopsis } = listBooks

    const onAdd = (quantity) => {
        setProductoStock(productoStock - quantity);
        addItem(listBooks, quantity);
    }

    useEffect(() => {
        setProductoStock(listBooks.stock);
    }, [listBooks]);

    return (
        <div className="cardDetail d-flex justify-content-center">
            <div className='details'>
                <div className='big-image'>
                    <img className="cardDetail-img" src={imagen} alt={nombre} />
                </div>
                
                <div className="box">
                    <div className="row">
                        <h2><b>{nombre}</b></h2>
                        <h5>{autor}</h5>
                        <span>{genero}</span>
                    </div>
                    <p>{sinopsis}</p>
                    <h6><b>Disponibles: {stock}.</b></h6>
                    <span>${precio}</span>
                    <div className="cardDetail-btn">
                        <ItemCount center onAdd={onAdd} stock={stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}