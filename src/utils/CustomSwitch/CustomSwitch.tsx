import React, { useEffect, useState } from 'react'
import { FunctionComponent } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

interface Props {
    children: any
}

const CustomSwitch: FunctionComponent<Props> = ({ children }) => {

    const [progress, setProgress] = useState<boolean>(false);
    const [prevLoc, setPrevLoc] = useState<any>("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(true)
        if(location.pathname === prevLoc) setPrevLoc("")
        
    }, [location])

    useEffect(() =>  {
        setTimeout(() => setProgress(false), 1200)
        
    }, [prevLoc])

  return (
    <>
        {progress && <Loader/>}
        <Routes>{children}</Routes>
    </>
  )
}

export default CustomSwitch