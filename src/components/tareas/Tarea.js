import React, { useContext } from 'react'
import { tareasContext } from '../../context/tareas/tareasContext'

export const Tarea = ({tarea}) => {

    const { 
        eliminarTarea, 
        cambiarEstadoTarea,
        obtenerTareaActual,
        filtrarTareas
    } = useContext(tareasContext)

    const handleClickEstado = () => {
        cambiarEstadoTarea(tarea.id)
        filtrarTareas(tarea.proyectoId);
    }

    const handleClickEliminar = () => {
        eliminarTarea(tarea.id);
        filtrarTareas(tarea.proyectoId);
    }

    return (
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {
                    tarea.estado 
                    ?  
                    (
                        <button
                            onClick={handleClickEstado}
                            type='button'
                            className='completo'
                        >
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            onClick={handleClickEstado}
                            type='button'
                            className='incompleto'
                        >
                            Incompleto
                        </button>
                    )
                }
            </div>

            <div className='acciones'>
                <button 
                    onClick={() => obtenerTareaActual(tarea.id)}
                    type='button'
                    className='btn btn-primario'
                >
                    Editar
                </button>

                <button 
                    onClick={handleClickEliminar}
                    type='button'
                    className='btn btn-secundario'
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}
