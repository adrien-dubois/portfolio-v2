import { FunctionComponent, useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi';
import { FaLock } from 'react-icons/fa';
import { Div } from './InputPassword.elements'

type InputPasswordProps = {
    handleChange: (e: any) => void;
    name: string;
    placeholder: string;
    error: boolean;
}

const InputPassword: FunctionComponent<InputPasswordProps> = ({
    handleChange,
    name,
    placeholder,
    error
}) => {

    const [passwordShown, setPasswordShown] = useState(false)
    const togglePassword = () => setPasswordShown(!passwordShown);
    

  return (
    <Div className={error ? "error" : ""}>
        <div className="icon">
            <FaLock/>
        </div>
        <input
            name={name}
            type={passwordShown ? "text" : "password"}
            onChange={handleChange}
            required
            autoComplete='off'
            placeholder={placeholder}
            
        />
        <div className="show" onClick={togglePassword}>
            {passwordShown ? <BiHide/> : <BiShow/>}
        </div>
    </Div>
  )
}

export default InputPassword