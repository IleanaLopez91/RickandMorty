export const validation = (inputs) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const contieneNumero = /\d/.test(inputs.password);
    const errors = {};
    if(!regexEmail.test(inputs.email)){
        errors.email = "El usuario tiene que ser un email"
    }
    
    if(inputs.email.length > 35){
        errors.email = "El usuario no debe tener mas de 35 caracteres"
    }

    if(!inputs.email){
        errors.email = "El usuario debe estar completo"
    }

    if(inputs.password.length < 6 || inputs.password.length >10){
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    }

    if(!contieneNumero){
        errors.password = "Este campo no puede estar vacio"
    }
    
    return errors
} 