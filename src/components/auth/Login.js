import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom'

const estadoInicial = {
    email: '',
    password: ''
}
export const Login = () => {
    const { state, handleInputChange } = useForm(estadoInicial)
    const { email, password } = state;

    const handleSubmit = (e) => {
        e.preventDefault();

        // validar que no haya campos vacios

        //pasarlo al action
    }

    return (
        <div className='form-usuario'>
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar sesion</h1>

                <form onSubmit={handleSubmit} >
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
                        <label htmlFor='password'>Password</label>
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
                        <input type='submit' className='btn btn-primario btn-block' value='Iniciar sesion' />
                    </div>

                    <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                        Obtener una cuenta 
                    </Link>
                </form>
            </div>
        </div>
    )
}
