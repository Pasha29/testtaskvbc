import React from 'react';
import { Field, Formik } from 'formik';
import s from './Filters.module.css';

let Filters = (props) => {
    return (
        <div className={s.wrapper}>
            <Formik
            initialValues={{ name: '' }}
            onSubmit={(values) => {
                props.getFilteredDataTC(values);
            }}>
            {(props) => (
                <form className={s.formikForm} onSubmit={props.handleSubmit}>
                    <p>Name of product</p>
                    <Field name="name"/>
                    <button type="submit">Find</button>
                </form>
            )}
            </Formik>
        </div>
    )
}

export default Filters;