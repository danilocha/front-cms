import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import MyEditor from './MyEditor'
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';

import Categorias from './Categoria'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context'

const FormArticulo = ({ editar, contEditArticulo }) => {

    let { auth, token, loginOrlogoutAxios, id } = useContext(AuthContext)
    const [articulo, guardarArticulo] = useState({
        title: '',
        categoria: ''
    })
    const [contArticulo, guardarContArticulo] = useState([])

    const [archivo, guardarArchivo] = useState('')

    const subirArticulo = async e => {
        e.preventDefault();
        console.log(contArticulo)
        const formData = new FormData();
        formData.append("titulo", articulo.title)
        formData.append("categoria", articulo.categoria)
        formData.append("contenido", draftToHtml(convertToRaw(contArticulo.getCurrentContent())))
        formData.append("imagen", archivo)
        formData.append("autor", JSON.parse(id))
        formData.append("public", false)
        console.log(formData)

        try {
            const res = await loginOrlogoutAxios.post("/articles", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'x-auth-token': JSON.parse(token)
                }
            });



            if (res.status === 200) {
                Swal.fire(
                    "Se ha publicado el articulo",
                    res.data.mensaje,
                    "success"
                );
            }

        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Hubo un error",
                text: "Vuelva a intentarlo"
            });
        }
    }


    const obtenerInformacion = e => {
        guardarArticulo({
            ...articulo,
            [e.target.name]: e.target.value
        })
    }
    const obtenerArchivo = e => {
        guardarArchivo(e.target.files[0])
    }

    const router = useRouter()

    // const traerArticulo = async () => {
    //     const res = await loginOrlogoutAxios.get(`/articles/edit/${editar}`);
    //     const cont = res.data[0]
    //     guardarContEditArticulo(cont.contenido)
    // }
    // traerArticulo()


    useEffect(() => {
        if (!auth && localStorage.getItem('token') === null) router.push('/login')
    }, [token, auth])

    const titulo = editar ? `Editar articulo ${editar}` : "Nuevo articulo";

    return (
        <form onSubmit={subirArticulo}>
            <div className="container row">
                <h2>{titulo}</h2>
                <div className="input-field col s12">
                    <input placeholder="Titulo" name="title" onChange={obtenerInformacion} type="text" className="validate" />

                </div>
                <div className="file-field input-field col s12">
                    <div className="btn">
                        <span>Foto del articulo</span>
                        <input type="file" name="imagen" onChange={obtenerArchivo} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>

                <div className="col s10">
                    <h4>Articulo</h4>
                    <MyEditor guardarContArticulo={guardarContArticulo} contEditArticulo={contEditArticulo} />

                </div>
                <Categorias obtenerInformacion={obtenerInformacion} contArticulo={contArticulo} />
                <div className="col s12 center">
                    <input className="btn" type="submit" value="Subir articulo" />
                </div>
            </div>

        </form>
    );
}

export default FormArticulo;