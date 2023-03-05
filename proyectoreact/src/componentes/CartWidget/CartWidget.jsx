import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const CartWidget = () => {

    const { totalCart } = useContext(CartContext);

    return (
        <Link to={"./cart"} className="btn position-relative">
            <img src="img/cart.png" alt="cart" width="25" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {totalCart()}
            </span>
        </Link>
    )
}

export default CartWidget;