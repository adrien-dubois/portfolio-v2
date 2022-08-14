import { BsGoogle } from 'react-icons/bs';
import { signInWithGoogle } from '../../firebase';
import { InverseBtn } from '../../GlobalStyles';

const Login = () => {

  return (
    <div className="dashboard">
        <InverseBtn onClick={signInWithGoogle}>
            Connexion avec Google <BsGoogle/>
        </InverseBtn>
    </div>
  )
}

export default Login