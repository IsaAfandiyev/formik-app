import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

function FormikPage() {
    const formik = useFormik({
        initialValues: {
            productName: '',
            unitPrice: '',
            unitInStock: '',
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('Required'),
            unitPrice: Yup.string().required('Required'),
            unitInStock: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            axios.post('https://northwind.vercel.app/api/products', values)
        },
    });
    return (<>
        <p>formik</p>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="productName">First Name</label>
            <input
                id="productName"
                name="productName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.productName}
            />
            {formik.touched.productName && formik.errors.productName ? (
                <div>{formik.errors.productName}</div>
            ) : null}

            <label htmlFor="unitPrice">Last Name</label>
            <input
                id="unitPrice"
                name="unitPrice"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.unitPrice}
            />
            {formik.touched.unitPrice && formik.errors.unitPrice ? (
                <div>{formik.errors.unitPrice}</div>
            ) : null}

            <label htmlFor="unitInStock">Email Address</label>
            <input
                id="unitInStock"
                name="unitInStock"
                type="unitInStock"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.unitInStock}
            />
            {formik.touched.email && formik.errors.unitInStock ? (
                <div>{formik.errors.unitInStock}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    </>);
}

export default FormikPage;