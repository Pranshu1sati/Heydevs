// 'use client'
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input2 = (props) => {
    const { label, name, ...rest} = props
    const { touched, errors } = rest.formik || {};
    // console.log(rest.formik)
    // console.log(touched)
    // console.log(touched[name] )
  return (
    <div className="flex flex-col gap-1" >
      <lable className=' text-sm font-semibold' htmlFor={name}>
        {label}
      </lable>
      <Field
      id={name} 
      name={name}
      {...rest}
      className={`focus:border-purple-500 border-2 ${
        touched[name] && errors[name] ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}

      >
      </Field>
      <div className="text-red-700 text-xs font-normal">
         <p><ErrorMessage name ={name}/></p>
      </div>
    </div>
  )
}
export default Input2