import React from 'react';
import Layout from '../components/layout';

const Usuarios = () => {
    return (
        <Layout>
            <div className="container">
                <h2>Edita tu perfil</h2>
                <form>
                    <div className="row">
                        <div className="file-field input-field col s12">
                            <div className="btn">
                                <span>Foto de perfil</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <input id="nombre" type="text" className="validate" />
                            <label for="nombre">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="apellido" type="text" className="validate" />
                            <label for="apellido">Apellido</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="correo1" type="text" className="validate" />
                            <label for="correo1">correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="correo2" type="text" className="validate" />
                            <label for="correo2">Confirmar correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="contrasena1" type="password" className="validate" />
                            <label for="contrasena1">Contraseña</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="contrasena2" type="password" className="validate" />
                            <label for="contrasena2">Confirmar contraseña</label>
                        </div>

                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Resumen de biografia</label>
                        </div>
                        <div class="input-field col s12">
                            <textarea id="textarea2" class="materialize-textarea"></textarea>
                            <label for="textarea2">Biografia</label>
                        </div>
                    </div>
                    <div className="con s12 center"><input className="btn" type="submit" value="Crear usuario" /></div>
                </form>
            </div>
        </Layout>
    );
}

export default Usuarios;