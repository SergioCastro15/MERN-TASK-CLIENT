import React, { useReducer } from 'react'
import { tareasContext } from './tareasContext'
import { tareasReducer } from './tareasReducer';
import { 
    FILTRAR_TAREAS, 
    AGREGAR_TAREAS, 
    ERROR_FORMULARIO,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL ,
    TAREAS_ACTUALES,
    EDITAR_TAREAS
} from '../../types';


export const TareasState = (props) => {

    const initialState = {
        tareasProyecto: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1, id: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2, id: 2 },
            { nombre: 'Elegir plataforma de pago', estado: false, proyectoId: 3, id: 3 },
            { nombre: 'Elegir plataforma 2', estado: true, proyectoId: 1, id: 4 },
            { nombre: 'Elegir Colores 2', estado: false, proyectoId: 2, id: 5 },
            { nombre: 'Elegir plataforma de pago 2', estado: false, proyectoId: 2, id: 6 },
            { nombre: 'Elegir plataforma 3', estado: true, proyectoId: 1, id: 7 },
            { nombre: 'Elegir Colores 3', estado: false, proyectoId: 2, id: 8 },
            { nombre: 'Elegir plataforma de pago 3', estado: false, proyectoId: 1, id: 9 },
            { nombre: 'Elegir plataforma 4', estado: true, proyectoId: 1, id: 10 },
            { nombre: 'Elegir Colores 4', estado: false, proyectoId: 1, id: 11 },
            { nombre: 'Elegir plataforma de pago 4', estado: false, proyectoId: 3, id: 12 },
            { nombre: 'Elegir plataforma 5', estado: true, proyectoId: 1, id: 13 },
            { nombre: 'Elegir Colores 5', estado: false, proyectoId: 2, id: 14 },
            { nombre: 'Elegir plataforma de pago 5', estado: false, proyectoId: 3, id: 15 },
        ],
        tareasFiltradas: [],
        errorFormulario: true,
        tareaActual : {},
        estaEditando: false
    }

    const [state, dispatch] = useReducer(tareasReducer, initialState);

    const filtrarTareas = (proyectoId) => {
        dispatch({
            type: FILTRAR_TAREAS,
            payload: proyectoId
        })
    }

    const agregarTareas = (tarea) => {
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        })
    }

    const validarFormulario = (error) => {
        dispatch({
            type: ERROR_FORMULARIO,
            payload: error
        })
    }

    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const cambiarEstadoTarea = (id) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: id
        })
    }

    const obtenerTareaActual = (id) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: id
        })
    }

    const obtenerTareas = () => {
        dispatch({
            type: TAREAS_ACTUALES,
        })
    }

    const editarTarea = (tarea) => {
        dispatch({
            type: EDITAR_TAREAS,
            payload: tarea
        })
    }

    return(
        <tareasContext.Provider value={{
            tareasProyecto: state.tareasProyecto,
            tareasFiltradas: state.tareasFiltradas,
            errorFormulario: state.errorFormulario,
            tareaActual: state.tareaActual,
            estaEditando: state.estaEditando,
            filtrarTareas,
            agregarTareas,
            validarFormulario,
            eliminarTarea,
            cambiarEstadoTarea,
            obtenerTareaActual,
            obtenerTareas,
            editarTarea
        }}>
            { props.children }
        </tareasContext.Provider>
    )
}
