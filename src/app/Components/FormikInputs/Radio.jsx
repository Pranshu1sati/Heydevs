import {Field, ErrorMessage} from 'formik'
function Radio(props) {
    const {label, name, options, ...rest} = props
    // console.log(rest)
  return (
    <div className="flex flex-col gap-1" >
        <lable className=' text-sm font-semibold' htmlFor={name}>
        {label}
      </lable>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <div key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  name={name}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <p className="text-red-700 text-xs font-normal">
         <ErrorMessage name={name}/>
      </p>
    </div>
  )
}
export default Radio
