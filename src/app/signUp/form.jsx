'use client'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from 'react';
import Controls from "../Components/FormComponents/Controls";
import Link from 'next/link'
const form = () => {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    console.log("side effect");
    if (formSubmitted) {
      setLoading(true);
      const timeoutId = setTimeout(() => {
        setLoading(false);
        setFormSubmitted(false);
      }, 2000);
      return () => {
        console.log("cleanup");
        clearTimeout(timeoutId);
      };
    }
  }, [formSubmitted]);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    firstName: "",
    lastName :"",
    email: "",
    phone: "",
    radioOption: "",
    checkBox1: false,
    checkBox2:true,
    password: "",
  };
  const radioOptions = [
    { key: "options1", value: "option1" },
    { key: "options2", value: "option2" },
    { key: "options3", value: "option3" },
    { key: "options4", value: "option4" },
  ];
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    radioOption: Yup.string().required("Required"),
    checkBox1: Yup.boolean().required("Plz Accept"),
    checkBox2: Yup.boolean("Why? >_<"),
    password: Yup.string()
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Plz enter a password"),
  });
  const onSubmit = (values) => {
    // setLoading(true)
    console.log("here")
    // console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    setFormSubmitted(true);
  };
  return (
    loading ? (
      <div className="fixed inset-0 bg-gray-200 flex justify-center items-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
      </div>
    ) :
      (
        <div className='place-self-center px-4 py-5'>
        <div className="mx-auto max-w-lg space-y-5">
        <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold md:text-3xl">Welcome to</h2>
              <p 
                hrefLang="en" 
                className="text-info-600 flex items-center gap-2 text-sm font-medium hover:underline" 
                href="/en/auth/company/register"
              >
                Want hiring? Sign up as recruiter! 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeMiterlimit="10" 
                    strokeWidth="1.5" 
                    d="M14.43 5.93L20.5 12l-6.07 6.07"
                    fillRule="evenodd"
                  ></path>
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeMiterlimit="10" 
                    strokeWidth="1.5" 
                    d="M3.5 12h16.83" 
                    opacity=".4"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </p>
            </div>
      
            <div className="2xl:mt-7.5 mt-5">
              <div className="grid gap-3 2xl:gap-5">
            <Controls
              control="input"
              type="text"
              label="FirstName"
              name="firstName"
              placeholder="John"
              formik={formik}
            />
            <Controls
              control="input"
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              formik={formik}
            />
            <Controls
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="eg@eg.com"
              formik={formik}
            />
            <Controls
              control="password"
              // type="password"
              label="Password"
              name="password"
              placeholder="password"
              formik={formik}
            />
          <Controls
              control="phone"
              type="tel"
              name="phone"
              placeholder="00000000"
              formik={formik}
            />
           <Controls
              name="checkBox1"
              control="checkbox"
              type="checkbox"
              label="Agree to terms and conditions"
              formik={formik}
            />
            <Controls
              name="checkBox2"
              control="checkbox"
              type="checkbox"
              label="Subscribe if you want to get spam emails"
              formik={formik}
            />
              </div>
            </div>
      
            
               <div className="mt-8 mx-auto max-w-xs">
               <button type='submit' className="text-white bg-purple-400 relative select-none items-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium flex w-full justify-center rounded-md px-5 h-10">
                  Submit
                </button>
              </div>
              <div className="grid grid-cols-3 gap-5 mt-5"><button className="relative select-none items-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium transition-colors focus:ring-ring/40 focus:outline-none focus:ring-2 data-disabled:cursor-not-allowed data-disabled:ring-0 inline-flex justify-center rounded-md border-input border [&amp;:not([data-disabled])]:hover:bg-accent [&amp;:not([data-disabled])]:hover:text-accent-foreground [&amp;:not([data-disabled])]:focus:bg-accent [&amp;:not([data-disabled])]:focus:text-accent-foreground data-disabled:opacity-60 px-2.75 h-10" type="button" title="Sign in with Google"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 18 18" className="h-4 w-4"><path fill="#FFC107" d="M16.354 7.531h-.604V7.5H9v3h4.239A4.498 4.498 0 0 1 4.5 9 4.5 4.5 0 0 1 9 4.5c1.147 0 2.19.433 2.985 1.14l2.122-2.122A7.466 7.466 0 0 0 9 1.5a7.5 7.5 0 1 0 7.354 6.031Z"></path><path fill="#FF3D00" d="m2.363 5.51 2.464 1.806A4.498 4.498 0 0 1 9 4.5c1.147 0 2.19.433 2.985 1.14l2.121-2.122A7.465 7.465 0 0 0 9 1.5a7.496 7.496 0 0 0-6.636 4.01Z"></path><path fill="#4CAF50" d="M9.001 16.5a7.465 7.465 0 0 0 5.029-1.947l-2.322-1.965a4.467 4.467 0 0 1-2.707.912 4.498 4.498 0 0 1-4.231-2.98l-2.446 1.884A7.494 7.494 0 0 0 9.001 16.5Z"></path><path fill="#1976D2" d="M16.354 7.531h-.604V7.5H9v3h4.239a4.515 4.515 0 0 1-1.533 2.09l.001-.002 2.321 1.965C13.864 14.702 16.5 12.75 16.5 9c0-.503-.052-.994-.146-1.469Z"></path></svg></button><button className="relative select-none items-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium transition-colors focus:ring-ring/40 focus:outline-none focus:ring-2 data-disabled:cursor-not-allowed data-disabled:ring-0 inline-flex justify-center rounded-md border-input border [&amp;:not([data-disabled])]:hover:bg-accent [&amp;:not([data-disabled])]:hover:text-accent-foreground [&amp;:not([data-disabled])]:focus:bg-accent [&amp;:not([data-disabled])]:focus:text-accent-foreground data-disabled:opacity-60 px-2.75 h-10" type="button" title="Sign in with Github"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 19 18" className="h-4 w-4"><path fill="currentColor" d="M9.5.75a8.167 8.167 0 0 0-8.25 8.077A8.092 8.092 0 0 0 6.89 16.5c.413.075.563-.173.563-.39v-1.373c-2.296.488-2.783-1.08-2.783-1.08a2.145 2.145 0 0 0-.915-1.185c-.75-.495.06-.487.06-.487a1.733 1.733 0 0 1 1.26.832 1.777 1.777 0 0 0 2.4.668c.042-.41.228-.793.525-1.08-1.83-.203-3.75-.893-3.75-3.99a3.113 3.113 0 0 1 .832-2.183 2.835 2.835 0 0 1 .083-2.13s.697-.217 2.25.825a8.01 8.01 0 0 1 4.125 0c1.575-1.042 2.25-.825 2.25-.825.304.673.333 1.437.083 2.13.563.581.877 1.359.877 2.168 0 3.105-1.935 3.787-3.75 3.99a1.876 1.876 0 0 1 .563 1.5v2.212c0 .263.15.473.562.39a8.1 8.1 0 0 0 5.625-7.665A8.168 8.168 0 0 0 9.5.75Z"></path></svg></button><button className="relative select-none items-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium transition-colors focus:ring-ring/40 focus:outline-none focus:ring-2 data-disabled:cursor-not-allowed data-disabled:ring-0 inline-flex justify-center rounded-md border-input border [&amp;:not([data-disabled])]:hover:bg-accent [&amp;:not([data-disabled])]:hover:text-accent-foreground [&amp;:not([data-disabled])]:focus:bg-accent [&amp;:not([data-disabled])]:focus:text-accent-foreground data-disabled:opacity-60 px-2.75 h-10" type="button" title="Sign in with LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 19 18" className="h-4 w-4"><path fill="currentColor" d="M4.063 1.406a1.594 1.594 0 1 0 0 3.188 1.594 1.594 0 0 0 0-3.188ZM2.563 5.906A.094.094 0 0 0 2.469 6v9.75c0 .052.042.094.094.094h3a.094.094 0 0 0 .093-.094V6a.094.094 0 0 0-.093-.094h-3ZM7.438 5.906A.094.094 0 0 0 7.343 6v9.75c0 .052.042.094.093.094h3a.094.094 0 0 0 .094-.094V10.5a1.406 1.406 0 0 1 2.813 0v5.25c0 .052.042.094.094.094h3a.094.094 0 0 0 .093-.094V9.285c0-1.82-1.583-3.244-3.394-3.08-.558.052-1.11.19-1.626.411l-.98.42V6a.094.094 0 0 0-.094-.094h-3Z"></path></svg></button></div>
            </Form>
        )}
      </Formik>
      
      <div className="text-center">
        <p className="text-sm text-neutral-600">
        Already have an account? <Link className="text-blue-600 font-medium hover:underline" href="/login">
          Log in</Link>
          </p>
          </div>
          </div>
        </div>)
      )
}
export default form
