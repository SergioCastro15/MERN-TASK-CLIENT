import React, { useReducer } from 'react';
import { proyectoContext } from './proyectoContext';
import { proyectoReducer } from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    AGREGAR_PROYECTO,
    OBTENER_PROYECTO,
    MOSTRAR_ERROR,
    OBTENER_PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'

export const ProyectoState = props => {
    const initialState = {
        formulario: false,
        errorFormulario: false,
        proyectos: [
            { nombre: 'proyecto 1', id: 1},
            { nombre: 'proyecto 2', id: 2},
            { nombre: 'proyecto 3', id: 3},
        ],
        proyectoActual: ''
    }

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const agregarProyecto = (nombreProyecto) => {
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: nombreProyecto
        })
    }

    const obtenerProyecto = () => {
        dispatch({
            type: OBTENER_PROYECTO,
            payload: initialState.proyectos
        })
    }

    const mostrarError = (estadoError) => {
        dispatch({
            type: MOSTRAR_ERROR,
            payload: estadoError
        })
    }

    const obtenerProyectoActual = (proyecto) => {
        dispatch({
            type: OBTENER_PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    return(
        <proyectoContext.Provider value={{
            formulario: state.formulario,
            proyectos: state.proyectos,
            errorFormulario: state.errorFormulario,
            proyectoActual: state.proyectoActual,
            mostrarFormulario,
            agregarProyecto,
            obtenerProyecto,
            mostrarError,
            obtenerProyectoActual,
            eliminarProyecto
        }}>
            {props.children}
        </proyectoContext.Provider>
    )
}