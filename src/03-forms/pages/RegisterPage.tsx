import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const {
    onChange, resetForm, formData, name,
    email, password1, password2, isValidEmail
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    
  }

  return (
    <div>
        <h1>Register Page</h1>

        <form noValidate onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={onChange}
                name='name' 
                className={ `${ name.trim().length <= 0 && 'has-error' }` } 
            />
            { name.trim().length <= 0 && <span>Este campo es necesario</span>}

            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={onChange}
                name='email'
                className={ `${ !isValidEmail( email ) && 'has-error' }` } 
            />
            { !isValidEmail( email ) && <span>Email no es valido</span>}

            <input
                type="password"
                placeholder="password"
                value={password1}
                onChange={onChange}
                name='password1'
                className={ `${ password1.trim().length <= 0 && 'has-error' }` } 
            />
            { password1.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener 6 letras</span>}

            <input
                type="password"
                placeholder="Repeat password"
                value={password2}
                onChange={onChange}
                name='password2'
                className={ `${ password2.trim().length <= 0 && 'has-error' }` } 
            />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span>}
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button type="button" onClick={ resetForm }>Reset Form</button>
        </form>
    </div>
  )
}
