import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import { proyectoContext } from '../../context/proyectos/proyectoContext';

export const ListadoProyectos = () => {

    const { proyectos = [], obtenerProyecto } = useContext(proyectoContext);

    useEffect(() => {
        obtenerProyecto();
    }, [proyectos]);

    if(proyectos.length === 0) return <p>No hay proyectos , comienza creando uno</p>

    return (
        <ul className='listado-proyectos'>
            {
                proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
    )
}
