import React from 'react';
import Link from 'next/link'
import BtnPublicar from './BtnPublicar'
import EliminarArticulo from './eliminarArticulo';

const ListadoArticulos = ({ articulos }) => {
    return (
        <div className="articulos row">
            {articulos.map(articulo => (
                <div className="card col m4">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src={`http://localhost:5000/${articulo.imagen}`} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{articulo.titulo}</span>
                        <p>
                            <EliminarArticulo idArticle={articulo._id} />
                            {/* <Link href="/articulos/[editar]" as={`/articulos/${articulo.slug}`}><a className="btn">Editar</a></Link> */}
                            <BtnPublicar publicar={articulo.public} idArticle={articulo._id} />

                        </p>
                    </div>

                </div>
            ))}

        </div>

    );
}

export default ListadoArticulos;