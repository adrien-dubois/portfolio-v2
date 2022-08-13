import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./Home";
import Login from "../Login/Login";

const Dashboard = () => {

    const [user, setUser] = useState<any>(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, [])

  return (
    <div>
        { user ? <Home/> : <Login/> }
    </div>
  )
}

export default Dashboard