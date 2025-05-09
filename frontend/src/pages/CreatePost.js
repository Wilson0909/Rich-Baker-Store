import React, { useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
    const navigate=useNavigate();

    const initialValues = {
        title: "",
        postText:"",
        username:"",
    }
    const validationSchema= Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required() ,
        username:Yup.string().min(3).max(16).required(),
    })

    const onSubmit=(data)=>{
        axios.post("http://localhost:3001/posts", data).then((response)=>{
            console.log(data);
            navigate("/home");
    });

    }
  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        
            <Form className='formContainer'>
                <label>Title:</label>
                <ErrorMessage name="title" component="span"/>
                <Field id="inputCreatePost" 
                name="title"
                 placeholder="Title...." autoComplete="off"/>

                <label>PostText:</label>
                <ErrorMessage name="postText" component="span"/>
                <Field id="inputCreatePost" name="postText" placeholder="Text...."/>

                <label>username:</label>
                <ErrorMessage name="username" component="span"/>
                <Field id="inputCreatePost" name="username" placeholder="Username...."/>

                <button type='submit'>Submit Post</button>
            </Form>

        </Formik>
    </div>
  )
}

export default CreatePost
