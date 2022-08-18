import { useEffect, useState } from 'react';
import Home from "./Home";
import Login from "../Login/Login";
import decode, { JwtPayload } from 'jwt-decode';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {

    
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')!));
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    return window.location.href="/";
  }

  type customJwtPayload = JwtPayload & { exp: number };

  useEffect(() => {
    const token = profile?.token;

    if(token){
        const decodedToken = decode<customJwtPayload>(token);

        if(decodedToken.exp * 1000 < new Date().getTime()){
            logout()
        }
    }

    setProfile(JSON.parse(localStorage.getItem('profile')!));

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  
    return (
        <div>
            { profile ? <Home/> : <Login/> }
        </div>
    )
}

export default Dashboard