import { useEffect, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

interface IProps {
    children: JSX.Element | JSX.Element[] ;
}


const CustomSwitch= ({ children } : IProps ) => {

    const [progress, setProgress] = useState<boolean>(false);
    const [prevLoc, setPrevLoc] = useState<any>("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true)
        if(location.pathname === prevLoc) setPrevLoc("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    useEffect(() =>  {
        setTimeout(() => setProgress(false), 1200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevLoc])

  return (
    <>
        {progress && <Loader/>}
        <Routes location={location} key={location.pathname}>
            {children}
        </Routes>
    </>
  )
}

export default CustomSwitch