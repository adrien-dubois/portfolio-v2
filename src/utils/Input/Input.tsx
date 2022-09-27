import { Div } from './Input.elements'

interface IProps  {
  idField:  string;
  placeholder: string;
  name: string;
  icon: JSX.Element;
  type: string;
  value: any;
  classname?: string;
  handleChange: (e: any) => void;
  error: boolean;
}

const Input = ({ 
    handleChange,
    icon, 
    idField,
    type, 
    placeholder,
    classname,
    value,
    name,
    error
} : IProps) => {

  return (
    <Div className={error ? "error" : ""}>
        <div className="icon">
            {icon}
        </div>
        <input
            id={idField}
            name={name}
            type={type}
            className={classname}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
            value={value}
        />
        <span className="border"></span>
    </Div>
  )
}

export default Input