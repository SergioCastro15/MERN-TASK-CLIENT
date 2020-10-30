import React, { useContext } from 'react'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { tareasContext } from '../../context/tareas/tareasContext'

export const Proyecto = ({ proyecto }) => {

    const { obtenerProyectoActual } = useContext(proyectoContext)
    const { filtrarTareas } = useContext(tareasContext);

    const handleClick = () => {
        obtenerProyectoActual(proyecto)
        filtrarTareas(proyecto.id)
    }

    return (
        <li>
            <button 
                onClick={handleClick} 
                type='button' 
                className='btn btn-blank'
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}
