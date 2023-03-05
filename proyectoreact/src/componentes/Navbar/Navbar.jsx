import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { books } from "../../assets/books"
import { useEffect, useState } from "react";

export const NavBar = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        const info = new Promise((resolve) => {
            setTimeout(() => {
                resolve(books)
            }, 1000)
        })
        info.then((info) => {
            let categories = []
            books.forEach(item => {
                if (categories.includes(item.categoria)) return
                categories.push(item.categoria)
            })
            setCategory(categories)
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">
                                <img src="img/green books.png" alt="Green Books" width="200" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" aria-current="page">Inicio</Link>
                                    </li>
                                    {category?.map(item => {
                                        return (
                                            <li className="nav-item">
                                                <Link to={`/category/${item}`} className="nav-link" aria-current="page">{item}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}