import {useField, ErrorMessage} from "formik";
const Input = ({placeholder, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1" >
      <lable className='text-gray-600 text-sm font-semibold'>
        Lable for now
      </lable>
      <input
      type={field.type}
      name ={field.name}
      placeholder={placeholder}
      className="border-2 border-gray-300 p-2 rounded-full" 
      >
      </input>
      <p className="text-red-700 text-xs font-bold">
          {meta.touched && meta.error && <ErrorMessage name ={field.name}/>}
      </p>
    </div>
  )
}
export default Input