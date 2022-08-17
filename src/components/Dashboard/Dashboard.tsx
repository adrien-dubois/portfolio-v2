import { useState } from 'react';
import Home from "./Home";
import Login from "../Login/Login";

const Dashboard = () => {

    
  const [profile,] = useState(JSON.parse(localStorage.getItem('profile')!))
  
    return (
        <div>
            { profile ? <Home/> : <Login/> }
        </div>
    )
}

export default Dashboard