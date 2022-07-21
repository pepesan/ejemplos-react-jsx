import React from 'react';
import { Formik } from 'formik';
import './FormFormik.css';

class FormFormik extends React.Component {

    constructor(props) {
        super(props);
        this.initialValues = { name: '', amount: '', date: '', category: '' }
    }
    validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.amount) {
            errors.amount = 'Required';
        }
        if (!values.date) {
            errors.date = 'Required';
        }
        if (!values.category) {
            errors.category = 'Required';
        }
        return errors;
    }
    handleSubmit = (values, setSubmitting) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }
    render() {
        return (
            <div id="expenseForm">
                <h2>Formulario con Formik</h2>
                <Formik
                    initialValues={this.initialValues}
                    validate={values => this.validate(values)}
                    onSubmit={(values, {setSubmitting}) => this.handleSubmit(values, setSubmitting)}>
                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleChange,
                             handleBlur,
                             handleSubmit,
                             isSubmitting,
                             /* and other goodies */
                         }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">

                                    <label
                                        htmlFor="name" className="form-label ">
                                        Title
                                    </label>
                                    <input type="text" id="name" name="name" placeholder="Enter expense title"
                                           className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.name}/>
                                    <div className="input-error"><span>{errors.name && touched.name && errors.name}</span></div>
                                </div>
                                <div className="mb-3">
                                <label
                                    htmlFor="amount" className="form-label">Amount </label>
                                <input type="number" id="amount" name="amount" placeholder="Enter expense amount" className="form-control"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.amount}/>
                                <div className="input-error"><span>{errors.amount && touched.amount && errors.amount}</span></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Spend
                                        Date </label>
                                    <input type="date" id="date" name="date" placeholder="Enter date" className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.date}/>
                                    <div className="input-error">
                                        <span>{errors.date && touched.date && errors.date}</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="category" className="form-label">Category </label>
                                    <select id="category" name="category" className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.category}>
                                        <option value="">Select</option>
                                        <option value="Food">Food</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Academic">Academic</option>
                                    </select>
                                    <div className="input-error"><span>{errors.category && touched.category && errors.category}</span></div>
                                </div>
                                <div className="mb-3">
                                    <input type="submit" value="Submit" className="btn btn-primary" disabled={isSubmitting}/>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default FormFormik;