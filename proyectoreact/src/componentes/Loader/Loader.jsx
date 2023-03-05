import React from "react";

const Loader = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-dark" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader;