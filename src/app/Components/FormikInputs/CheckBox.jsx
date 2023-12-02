import { Field } from 'formik';

const CheckBox = (props) => {
  const { label, name, ...rest } = props;
  const { touched, errors } = rest.formik || {};
//   console.log(rest)
  
  return (
<div className="flex items-center gap-4">
      <Field 
        id={name} 
        name={name}
        type='checkbox'
        {...rest}
        className={`focus:border-purple-500 border-2 ${
          touched[name] && errors[name] ? 'border-red-500' : 'border-gray-500'
        } p-2 rounded-md`}
      />
      <label className='text-sm font-semibold' htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;