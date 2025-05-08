import React from 'react'
import {Formik, Form, Field, ErrorMessage, isInteger} from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {

    const navigate=useNavigate();


    const initialValues = {
        username:"",
        password:""
    }
    const validationSchema= Yup.object().shape({
        username:Yup.string().min(3).max(16).required(),
        password:Yup.string().min(6).max(10).required(),
    })

    const onSubmit =(data)=>{
        axios.post(" http://localhost:3001/auth",data).then(()=>{
            console.log(data);
            navigate('/login');
        })

    }


  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        
        <div className='bg-stone-700 xl:w-5/12 h-3/6 flex justify-center items-center flex-col sm:w-full md:w-7/12'>
        <div>
            <h3 className='mb-7'>Registration</h3>
        </div>

        <Form className='formContainer'>
            <label>username:</label>
            <ErrorMessage name="username" component="span"/>
            <Field id="inputCreatePost" name="username" placeholder="Username"/>

            <label>password:</label>
            <ErrorMessage name="password" component="span"/>
            <Field id="inputCreatePost" name="password" placeholder="Password " type="password"/>

            <div className='flex justify-center'> <button type='submit' className=''>Register </button></div>
           
        </Form>

        </div>
      
    </Formik>
    </div>
  )

  }


export default Registration
