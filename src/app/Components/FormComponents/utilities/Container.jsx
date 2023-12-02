"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Controls from "../Controls";
import PhoneInput from "../../FormikInputs/PhoneInput";
import { Datepicker } from '@aliakbarazizi/headless-datepicker';
import classNames from 'classnames';

function FormikContainer() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    firstName: "",
    email: "",
    phone: "",
    radioOption: "",
    checkBox: false,
    password: "",
  };
  const dropdownOptions = [
    //will define later
  ];
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
    radioOption: Yup.string().required("Required"),
    checkBox: Yup.boolean().required("Plz Accept"),
    password: Yup.string()
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Plz enter a password"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="px-[200px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <Controls
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="eg@eg.com"
              formik={formik}
            />
            <Controls
              control="input"
              type="text"
              label="First Name"
              name="firstName"
              placeholder="John"
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
              name="radioOption"
              control="radio"
              type="radio"
              label="Radio topic"
              options={radioOptions}
              formik={formik}
            />
            <Controls
              name="checkBox"
              control="checkbox"
              type="checkbox"
              label="Agree to terms and conditions"
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
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
      <Datepicker >
  <Datepicker.Input
    format="yyyy/MM/dd HH:mm"
    className="flex w-60 rounded-md p-2 shadow-sm outline-none ring-1 ring-gray-500 focus-within:ring-2 focus-within:ring-blue-600"
  />
  <Datepicker.Picker
    defaultType="day"
    className="rounded-md bg-white p-4 shadow-md  w-[352px]"
  >
    {({ monthName, hour, minute, year }) => (
      <>
        <div className="flex w-full items-center justify-between space-x-6 py-2 rtl:space-x-reverse">
          <Datepicker.Button
            action="prev"
            className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
          >
            Prev
          </Datepicker.Button>
          <div className="flex">
            <Datepicker.Button
              action="toggleHourPicker"
              className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white flex items-center space-x-2"
            >
              {('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2)}
            </Datepicker.Button>
            <Datepicker.Button
              action="toggleMonth"
              className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
            >
              {monthName}
            </Datepicker.Button>
            <Datepicker.Button
              action="toggleYear"
              className="leading-2 p-2 text-lg font-semibold hover:bg-gray-700 hover:text-white"
            >
              {year}
            </Datepicker.Button>
          </div>
          <Datepicker.Button
            action="next"
            className="rounded-full p-2 text-sm font-medium hover:bg-gray-700 hover:text-white rtl:rotate-180"
          >
            Next
          </Datepicker.Button>
        </div>
        <Datepicker.Items
          className={({ type }) =>
            classNames(
              'grid w-full auto-rows-max gap-4 overflow-y-auto scroll-smooth',
              type == 'day' && 'grid-cols-7',
              type == 'month' && 'grid-cols-3',
              type == 'year' && 'max-h-[274px] grid-cols-4',
            )
          }
        >
          {({ items }) =>
            items.map((item) => (
              <Datepicker.Item
                key={item.key}
                item={item}
                className={classNames(
                  'grid items-center justify-center rounded-full py-1.5 text-sm font-medium select-none',
                  item.isHeader ? 'cursor-default' : 'hover:bg-gray-700',
                  item.disabled ? 'text-gray-500' : 'hover:text-white',
                  item.type === 'day' && 'h-8 w-8',
                  item.isSelected && 'bg-gray-600',
                  item.isToday && 'border border-gray-500',
                )}
                action={
                  item.type === 'day'
                    ? 'close'
                    : item.type === 'month'
                    ? 'showDay'
                    : 'showMonth'
                }
              >
                {item.isHeader ? item.text.substring(0, 2) : item.text}
              </Datepicker.Item>
            ))
          }
        </Datepicker.Items>
        <Datepicker.Button
          action="today"
          className="mt-4 w-full text-white bg-blue-700 p-2 text-sm font-medium hover:bg-blue-600"
        >
          Today
        </Datepicker.Button>
        <Datepicker.Picker
          className="flex max-h-56 rounded-md border border-gray-600 bg-white py-2 shadow-md rtl:flex-row-reverse  "
          id="HourPicker"
        >
          <Datepicker.Items
            type="hour"
            className="overflow-y-auto scroll-smooth px-4"
            disableAutoScroll
          >
            {({ items }) =>
              items.map((item) => (
                <Datepicker.Item
                  key={item.key}
                  item={item}
                  action="close"
                  className={classNames(
                    'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white',
                    item.isSelected && 'bg-gray-600',
                  )}
                >
                  {('0' + item.text).slice(-2)}
                </Datepicker.Item>
              ))
            }
          </Datepicker.Items>
          <Datepicker.Items
            type="minute"
            className="overflow-y-auto scroll-smooth px-4"
            disableAutoScroll
          >
            {({ items }) =>
              items.map((item) => (
                <Datepicker.Item
                  key={item.key}
                  item={item}
                  action="close"
                  className={classNames(
                    'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white',
                    item.isSelected && 'bg-gray-600',
                  )}
                >
                  {('0' + item.text).slice(-2)}
                </Datepicker.Item>
              ))
            }
          </Datepicker.Items>
        </Datepicker.Picker>
      </>
    )}
  </Datepicker.Picker>
</Datepicker>
      {/* <PhoneInput/> */}
    </div>
  );
}

export default FormikContainer;
