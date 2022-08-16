import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FlatButton } from '../../GlobalStyles';
import Input from '../../utils/Input/Input';
import InputPassword from '../../utils/InputPassword/InputPassword';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Div } from './Login.element';
import * as api from '../../api';

const initialState = {
  username: "",
  password: ""
}

const Login = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if(error === true) {
      setError(false);
      setErrorMessage("");
    }

  }

  const handleSignin = async (e: any) => {
    e.preventDefault();
    try {
      await api.signIn(formData)
      .then((response) => {
        localStorage.setItem('profile', JSON.stringify(response.data))
        window.location.href="/dashboard";
      })
    } catch (error: any) {

      if(error.response.status === 401){
        setError(true);
        setErrorMessage("Email et/ou mot de passe incorrect(s).")
      }
      else {
        console.log(error.response.data);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <Div>
      <div className="text-zone">
        <h1>
            <AnimatedLetters
                strArray={"Connexion".split("")}
                letterClass={letterClass}
                idx={15}
            />
        </h1>

      { error &&
        <div className="error-message">
          { errorMessage}
        </div>
      }

        <form>
          <Input
            type='email' 
            name='username' 
            placeholder="E-Mail" 
            icon={<FaEnvelope/>}
            handleChange={handleChange}
            idField="username"
            value={formData.username}
            error={error}
          />

          <InputPassword
            name="password"
            handleChange={handleChange}
            placeholder="Mot de passe"
            error={error}
          />

          <FlatButton type="submit" value="Envoyer" className='btn' onClick={handleSignin} />

        </form>
        
      </div>
    </Div>
  )
}

export default Login