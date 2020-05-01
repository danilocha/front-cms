import React from 'react';

const FormCategorias = ({ categorias }) => {
    return (
        <>
            <h4>Categoria</h4>
            {console.log(categorias)}
            <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>categoria 1</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>categoria 2</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>categoria 3</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>categoria 4</span>
                </label>
            </p>
            <form>
                <h6>Otra</h6>
                <input className="validate" type="text" />
                <input className="btn" type="submit" value="Agregar categoria" />
            </form>
        </>
    );
}

export default FormCategorias;