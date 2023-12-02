// 'use client'
import CheckBox from "../FormikInputs/CheckBox"
import Input from "../FormikInputs/Input"
import Password from "../FormikInputs/Password"
import PhoneInput from "../FormikInputs/PhoneInput"
import Radio from "../FormikInputs/Radio"

const Controls = (props) => {
    const { control, ...rest } = props
    // console.log(rest)
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
        case 'select' :
        case 'radio' :
            return <Radio {...rest}/>
        case 'checkbox':
            return <CheckBox {...rest}/>
        case 'password':
            return <Password {...rest}/>
        case 'date':
        // case "rich-text":
        // return < Editor {...rest}/>
        case 'phone':
        return <PhoneInput {...rest}/>
        default: return null
    }
}
export default Controls