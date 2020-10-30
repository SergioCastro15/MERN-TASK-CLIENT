import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { proyectoContext } from '../../context/proyectos/proyectoContext';

const estadoInicial = {
    nombre: '',
}

export const NuevoProyecto = () => {

    const { state, setState, handleInputChange } = useForm(estadoInicial);
    const { nombre } = state;

    const { 
        formulario,
        errorFormulario, 
        mostrarFormulario, 
        agregarProyecto,
        mostrarError 
    } = useContext(proyectoContext)


    const handleSubmit = (e) => {
        e.preventDefault();

        // validar proyecto
        if(nombre !== '') {
            // agregar al state
            agregarProyecto({
                nombre,
                id: Date.now()
            });
            // reiniciar el state
            setState(estadoInicial);
            mostrarError(false);
        } else {
            mostrarError(true);
        }
    }

    return (
        <>
            <button 
                type='button'
                className='btn btn-block btn-primario'
                onClick={() => mostrarFormulario()}
            >
                Nuevo Proyecto
            </button>  

            { formulario && (
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={handleSubmit}
                >
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre proyecto'
                        name='nombre'
                        value={nombre}
                        onChange={handleInputChange}
                    />

                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar Proyecto'
                    />
                </form>
            )}

            { errorFormulario && <p className='mensaje error'> El nombre del proyecto es obligatorio </p>}
        </>
    )
}
