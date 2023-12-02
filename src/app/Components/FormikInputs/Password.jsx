'use client'
import React,{useState} from 'react';

import { Field, ErrorMessage, useFormikContext } from 'formik';
import { GrHide } from "react-icons/gr";
import { BiShow } from "react-icons/bi";
import { EyeOutlined,EyeInvisibleFilled } from '@ant-design/icons';

const Password = (props) => {
    const { label, name, ...rest} = props
    const {setFieldValue} = rest.formik || {};
    const [showHidePassword, changeShowHidePassword] = useState(false);
    const { getFieldMeta } = useFormikContext();
    const meta = getFieldMeta(name);
    // console.log(rest.formik)
    // console.log(touched)
    // console.log(rest.formik)
  return (
    <div className="flex flex-col gap-1" >
      <lable className=' text-sm font-semibold' htmlFor={name}>
        {label}
      </lable>
      <div className='w-full flex flex-row gap-1 items-center'>
      <Field
      id={name} 
      name={name}
      type={showHidePassword ? "text" : "password"}
      {...rest}
      className={`w-5/6 h-14 focus:border-purple-500 border-2 ${
        meta.touched && meta.error ? 'border-red-500' : 'border-gray-500'} p-2 rounded-md`}

      >
      </Field>
      <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              changeShowHidePassword(!showHidePassword)
              }}
              className='pb-2'
      >
        {showHidePassword? <EyeOutlined/> : <EyeInvisibleFilled/>}
      </button>
      </div>
      <p className="text-red-700 text-xs font-normal">
         <ErrorMessage name ={name}/>
      </p>
    </div>
  );
}
export default Password