import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({onAdd, stock}) => {   

    const [count, setCount] = useState(1)

    const [bookStock, setBookStock] = useState(stock);

    const [vendido, setVendido] = useState(false);

    const increase = () => {
        if (count < bookStock){
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > 1){
            setCount(count - 1)
        }
    }


    const agregarAlCarrito = (quantity) => {
        if (count <= bookStock) {
            setCount(1);
            setBookStock(bookStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }


    useEffect(() => {
        setBookStock (stock);
    }, [stock])

    return (
        <div>
            <div>
                <button type="button" onClick={decrease}>-</button>
                <button type="button"> Cantidad : {count} </button>
                <button type="button" onClick={increase}>+</button>
            </div>
            <div>
                <div>
                    {vendido ? <button className="buy"><Link to={"/cart"} className="buy">Terminar mi compra</Link></button> :
                    <button type="button" className="addToCart" onClick={() => { agregarAlCarrito(count)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;