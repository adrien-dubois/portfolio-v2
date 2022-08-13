import { signInWithGoogle } from '../../firebase';

const Login = () => {

  return (
    <div className="dashboard">
        <button onClick={signInWithGoogle}>
            Connexion avec Google
        </button>
    </div>
  )
}

export default Login