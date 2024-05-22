import React, { useContext } from 'react'
import { Formik } from 'formik'; 
import axios from 'axios';
import MainContext from "../../../context/context"
import "./Addproduct.css"

const Addproduct = () => {
    const {data , setData} = useContext(MainContext)
    return (
        <div className='formik_form'>
            <h1>Melumatları daxil edin!</h1>
            <Formik
                initialValues={{ title: '', image: '', price: '', description: '' }}
                validate={values => {
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:8080/product",{
                        title: values.title,
                        image: values.image,
                        price: values.price,
                        description: values.description,
                    }).then(res=>{
                        setData([...data, res.data])
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && errors.title}
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image1}
                        />
                        {errors.image && touched.image && errors.image}
                        <input
                            type="text"
                            name="price"
                            placeholder='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && errors.price}
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && errors.description}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
  
};
export default Addproduct