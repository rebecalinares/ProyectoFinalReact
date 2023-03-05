import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="container py-5">
            <hr />
            <div className="row">
                <div className="col-md-10">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Envíos y Devoluciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="/" target="_blank">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src="img/green books.png" alt="Green Books" width="200" /> © Green Books 2023.</p>
                </div>
            </div>
        </div>
    )
}