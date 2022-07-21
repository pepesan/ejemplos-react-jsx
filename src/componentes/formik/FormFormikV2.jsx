import React from 'react';
import './FormFormikV2.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({

    email:
        Yup
            .string()
            .email('Hay que introducir un email válido')
            .required('Este campo es obligatorio'),
    password:
        Yup
            .string()
            .required("Este campo es obligatorio")
            .min(6, "Debe tener al menos 6 caracteres")
            .max(20, "debe tener menos de 20 caracteres")
});
const FormFormikV2 = () => (

    <div>

        <h1>Any place in your app!</h1>

            <Formik

            initialValues={{ email: '', password: '' }}

            validationSchema={SignupSchema}

            onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {

                    console.log(JSON.stringify(values, null, 2));

                    setSubmitting(false);

                }, 400);

            }}

        >

            {({ isSubmitting }) => (

                <Form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"> Email * </label>
                        <Field id="email"  type="email" name="email"   className="form-control"/>

                        <ErrorMessage className="input-error" name="email" component="div" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" > Password </label>
                        <Field id ="password" type="password" name="password" className="form-control"/>

                        <ErrorMessage className="input-error" name="password" component="div" />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>

                        Submit

                    </button>

                </Form>

            )}

        </Formik>

    </div>

);



export default FormFormikV2;