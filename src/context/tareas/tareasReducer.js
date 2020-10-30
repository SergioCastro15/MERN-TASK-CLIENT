export const tareasReducer = (state, action) => {
    const tareasReducerAction = {
        'FILTRAR_TAREAS': {
            ...state,
            tareasFiltradas: state.tareasProyecto.filter(tarea => tarea.proyectoId === action.payload)
        },
        'AGREGAR_TAREAS':{
            ...state,
            tareasProyecto: [...state.tareasProyecto, action.payload],
            estaEditando: false
        },
        'ERROR_FORMULARIO': {
            ...state,
            errorFormulario: action.payload
        },
        'ELIMINAR_TAREA': {
            ...state,
            tareasFiltradas: state.tareasFiltradas.filter(tarea => tarea.id !== action.payload)
        },
        'ESTADO_TAREA': {
            ...state,
            tareasFiltradas: state.tareasFiltradas.map(tarea => {
                if(tarea.id === action.payload) {
                    return {
                        ...tarea,
                        estado: !tarea.estado
                    }
                }

                return tarea;
            })
        },
        'TAREA_ACTUAL': {
            ...state,
            tareaActual: state.tareasFiltradas.find(tarea => tarea.id === action.payload),
            estaEditando: true
        },
        'EDITAR_TAREAS': {
            ...state,
            estaEditando: false,
            tareasProyecto: state.tareasProyecto.map(
                tarea => tarea.id === action.payload.id ? action.payload : tarea
            )
        }
    }

    return tareasReducerAction[action.type] || state;
}