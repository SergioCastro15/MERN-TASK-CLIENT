import React, { useContext, useEffect } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext';
import { useForm } from '../../hooks/useForm';
import { tareasContext } from '../../context/tareas/tareasContext';

export const FormTarea = () => {

    const { 
        proyectoActual: { 
            nombre = '', 
            id: currentId 
        }
    } = useContext(proyectoContext);

    const { 
        agregarTareas, 
        filtrarTareas, 
        validarFormulario,
        editarTarea, 
        errorFormulario,
        tareaActual,
        estaEditando
    } = useContext(tareasContext);

    const { state, setState, handleInputChange } = useForm({
        nombre: '',
    });

    useEffect(() => {
        setState({ nombre: tareaActual.nombre});
    }, [tareaActual.nombre])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.nombre === '') {
            validarFormulario(true);
            return;
        }

        if(estaEditando) {
            const {estado, proyectoId, id } = tareaActual;
            editarTarea({
                nombre: state.nombre,
                estado,
                proyectoId,
                id,
            });
        } else {
            agregarTareas({
                nombre: state.nombre,
                estado: false,
                proyectoId: currentId,
                id: Date.now()
            });
        }

        validarFormulario(false);
        filtrarTareas(currentId);
        setState({ nombre: '' });
    }

    if( nombre === '') return null;

    return (
        <div className='formulario'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre tarea'
                        value={state.nombre}
                        name='nombre'
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={estaEditando ? 'Editar tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>
            { errorFormulario && <p className='mensaje error'>El nombre de la tarea es obligatorio</p> }
        </div>
    )
}
