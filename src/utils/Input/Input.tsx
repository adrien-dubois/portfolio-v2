import { FunctionComponent } from 'react'
import { Div } from './Input.elements'

type InputProps = {
  idField:  string
  placeholder: string;
  name: string;
  icon: JSX.Element;
  type: string;
  value: any;
  handleChange: (e: any) => void;
  error: boolean
}

const Input: FunctionComponent<InputProps> = ({ 
    handleChange,
    icon, 
    idField,
    type, 
    placeholder,
    value,
    name,
    error
}) => {

  return (
    <Div className={error ? "error" : ""}>
        <div className="icon">
            {icon}
        </div>
        <input
            id={idField}
            name={name}
            type={type}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
            value={value}
        />
    </Div>
  )
}

export default Input