"use client";
import React, { useState, useEffect } from "react";
import CountryData from "./CountryData.json";

import { Field, ErrorMessage } from "formik";

const PhoneInput = (props) => {
  const { name, ...rest } = props;
  const [dialCode, setDialCode] = useState("");
  const [countries, setCountries] = useState(CountryData);
  const [searchCode, setSearchCode] = useState("+91");
  const { touched, errors } = rest.formik || {};
  const { values, setFieldValue } = rest.formik;
  // console.log(countries)
  // ...

  useEffect(() => {
    const foundCountry = countries.find((obj) => obj.dial_code === searchCode);
    setFieldValue("phone", "");
    if (foundCountry) {
      // setFieldValue("phone", "");
      console.log(values.phone)
      setDialCode(foundCountry.dial_code);
      setFieldValue("phone", `${foundCountry.dial_code} ${values.phone}`);
      // console.log(values.phone)
    }
  }, [searchCode]);
  return (
    <section>
      <div className="flex flex-col gap-1">
        <lable className=" text-sm font-semibold" htmlFor={name}>
          Phone No.
        </lable>

        
          <div className="w-full flex flex-row gap-1">
            <select
              value={dialCode || ""}
              placeholder="Code"
              className="w-1/3 h-14  rounded-lg"
              onChange={(e) => setSearchCode(e.target.value)}
            >
              <option value="" hidden>
                --Select Country--
              </option>
              {countries.map((item) => (
                <option key={item.code} value={item.dial_code}>
                  {item.name}({item.dial_code})
                </option>
              ))}
            </select>
            
            <Field
              name={name}
              id={name}
              {...rest}
              className={`w-2/3 h-14 focus:border-purple-500 border-2 ${
                touched[name] && errors[name] ? 'border-red-500' : 'border-gray-500'}  rounded-md`}
            ></Field>
            
          </div>
          <p className="text-red-700 text-xs font-normal">
              <ErrorMessage name={name} />
            </p>
        </div>
      
    </section>
  );
};

export default PhoneInput;
