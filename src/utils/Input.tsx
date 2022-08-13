import { FunctionComponent } from 'react'
import { Div } from './Input.elements'

type InputProps = {
  idField:  string
  placeholder: string;
  name: string;
  icon: JSX.Element;
  type: string;
  handleChange: (e: any) => void;
}

const Input: FunctionComponent<InputProps> = ({ 
    handleChange,
    icon, 
    idField,
    type, 
    placeholder,
    name
}) => {

  return (
    <Div>
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
        />
    </Div>
  )
}

export default Input