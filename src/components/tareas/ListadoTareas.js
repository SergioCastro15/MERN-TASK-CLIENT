import React, { useContext, useEffect } from 'react'
import { Tarea } from './Tarea'
import { proyectoContext } from '../../context/proyectos/proyectoContext'
import { tareasContext } from '../../context/tareas/tareasContext';

export const ListadoTareas = () => { 

    const { proyectoActual: { nombre = '', id }, eliminarProyecto } = useContext(proyectoContext);
    const { tareasFiltradas } = useContext(tareasContext);

    if( nombre === '') return <h2>Selecciona un proyecto</h2>

    return (
        <>
            <h2>Proyecto {`${nombre}`}</h2>
            
            <ul className='listado-tareas'>
                { tareasFiltradas.length === 0 
                    ? (<li className='tarea'><p>No hay tareas</p></li>)
                    : (tareasFiltradas.map(tarea => (
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea} 
                        />
                    )))
                }
            </ul>

            <button 
                onClick={() => eliminarProyecto(id)}
                type='button' 
                className='btn btn-eliminar'>
                Eliminar Proyecto &times;
            </button>
        </>
    )
}
