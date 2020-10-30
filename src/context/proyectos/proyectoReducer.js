export const proyectoReducer = (state, action) => {
    const proyectoReducerActions = {
        'FORMULARIO_PROYECTO' : {
            ...state,
            formulario: !state.formulario
        },
        'AGREGAR_PROYECTO': {
            ...state,
            formulario: false,
            errorFormulario: false,
            proyectos: [...state.proyectos, action.payload]
        },
        'OBTENER_PROYECTO': {
            ...state,
            proyectos: state.proyectos
        },
        'MOSTRAR_ERROR': {
            ...state,
            errorFormulario: action.payload,
        },
        'OBTENER_PROYECTO_ACTUAL': {
            ...state,
            proyectoActual: action.payload
        },
        'ELIMINAR_PROYECTO': {
            ...state,
            proyectoActual: '',
            proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload)
        }
    }

    return proyectoReducerActions[action.type] || state;
}