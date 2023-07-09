import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
                      .min(2, 'El nombre debe ser de 2 caracteres o mas')
                      .required('Requerido'),
            email: Yup.string()
                      .email('Formato de correo incorrecto')
                      .required('Requerido'),
            password1: Yup.string()
                      .min(6, 'la contraseña debe ser de 6 caracteres o mas')
                      .required('Requerido'),
            password2: Yup.string()
                      .oneOf([Yup.ref('password1')], 'las contraseñas no son iguales')
                      .required('Requerido'),
          })
        }
      >

        { ({ handleReset }) => (
            <Form>
              <MyTextInput label='Nombre' name='name' />
              <MyTextInput label='Email' name='email' type='email' />
              <MyTextInput label='Password' name='password1' type='password' />
              <MyTextInput label='Repetir Password' name='password2' type='password' />
              
              <button type="submit">Create</button>
              <button type="button" onClick={ handleReset }>Reset Form</button> 
            </Form>
        )}

      </Formik>
          
    </div>
  )
}
