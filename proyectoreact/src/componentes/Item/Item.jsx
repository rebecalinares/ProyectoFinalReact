import React from "react"
import { Link } from "react-router-dom"

export const Item = ({ books }) => {

    const { imagen, nombre, precio, id } = books

    return (
        <div className="books card">
            <img src={imagen} alt={nombre} width="280px" />
            <div>
                <h3 className="titulo">{nombre}</h3>
                <h4 className="precio">${precio}</h4>
                <h4 className="btn">
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-dark">Ver detalles</button>
                    </Link>
                </h4>
            </div>
        </div>
    )
}