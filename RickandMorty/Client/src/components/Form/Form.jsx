import React, { useState } from 'react';
import { validation } from './validation';
import style from "./Form.module.css"

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const propiedad = [event.target.name];
        const valor = event.target.value;
        setUserData({...userData, [propiedad] : valor})
        setErrors(validation({...userData, [propiedad] : valor}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div>
            <label>EMAIL</label><br />
            <input 
                name='email'
                placeholder='Escribe tu email'
                type='text'
                value={userData.email}
                onChange={handleChange}
                className={style.inputForm}
            />
            {errors.email ? <p>{errors.email}</p> : null}
        </div>
        <div className={style.item}> 
            <label>PASSWORD</label><br />
            <input
                name='password'
                placeholder='Escribe tu cotraseña'
                type='text'
                value={userData.password}
                onChange={handleChange}
                className={style.inputForm}
            />
        {errors.password ? <p>{errors.password}</p> : null}
        </div>
        <button
            className={style.buttonEnviar}
            type='submit'
        >ENVIAR</button>
      </form>
    </div>
  )
}

export default Form
