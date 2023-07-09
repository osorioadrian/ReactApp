import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbox } from '../components';

export const FormikAbstractPage = () => {

  return (
    <div>
        <h1>Formik Abstraction Tutorial</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ ( values ) => {
                console.log( values );
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                email: Yup.string()
                                .email('Debe ser un correo valido')
                                .required('Requerido'),
                terms: Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las condiciones'),
                jobType: Yup.string()
                                .notOneOf([ 'it-jr' ], 'Esta opción no es permitida')
                                .required('Requerido')
            })}
        >

            { () => (
                    <Form>
                        <MyTextInput label="firstName " name="firstName" />
                        
                        <MyTextInput label="lastName " name="lastName" />

                        <MyTextInput label="email " name="email" type="email"/>

                        <MySelect label="jobType" name="jobType">
                            <option value=''>Pick something</option>
                            <option value='developer'>Developer</option>
                            <option value='designer'>Designer</option>
                            <option value='it-jr'>IT jr</option>
                        </MySelect>

                        <MyCheckbox label="Terms & conditions" name="terms" />

                        <button type='submit'>Submit</button>

                    </Form>
                )
            }

        </Formik>

    </div>

    
  )
}
