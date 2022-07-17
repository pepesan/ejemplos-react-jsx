import React from 'react';
import { useForm } from "react-hook-form";
function EjemploUserForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h2>Ejemplo React hook Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="example" className="form-label">Ejemplo</label>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input id="example" className="form-control" defaultValue="test" {...register("example")} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleRequired" className="form-label">Example Required</label>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input id="exampleRequired" className="form-control" {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}
export default EjemploUserForm;