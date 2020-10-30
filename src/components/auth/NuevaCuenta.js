import React from 'react'
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom'

const estadoInicial = {
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
}

export const NuevaCuenta = () => {
    const { state, handleInputChange } = useForm(estadoInicial)
    const { nombre, email, password, confirmar } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar que no haya campos vacios

        // password minimo de 6 caracteres 

        // dos password iguales

        //pasarlo al action
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Obtener una cuenta</h1>

                <form onSubmit={handleSubmit} >

                    <div className='campo-form'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input
                            type='text'
                            id='nombre'
                            name='nombre'
                            value={nombre}
                            placeholder='Tu nombre'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Tu email'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'>Email</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Tu password'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Password</label>
                        <input
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            value={confirmar}
                            placeholder='Repite tu password'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input type='submit' className='btn btn-primario btn-block' value='Registrarme' />
                    </div>

                    <Link to={'/'} className='enlace-cuenta'>
                        Volver a iniciar sesion
                    </Link>
                </form>
            </div>
        </div>
    )
}
