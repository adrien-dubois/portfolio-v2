import { useEffect, useState } from "react"
import { Div } from "../About/About.elements";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import * as api from '../../api';
import IsEmpty from '../../utils/IsEmpty';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const [projects, setProjects] = useState<any>(null); 

  useEffect(() => {
   const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
}, [])

useEffect(() => {
  try {
    api.getProject()
    .then((response) => {
      setProjects(response.data);
    })
  } catch (error) {
    console.log(error)
  }
}, [])

  const renderPortfolio = (portfolio: any) => {
    if(!IsEmpty(portfolio)){

      return(
        <div className="images-container">
          { 
            
              Object.values(portfolio).map(( port: any, idx: any) => {
               console.log(port)
                   return(
                     <div className="image-box" key={idx}>
                       <img src={`${process.env.REACT_APP_API_IMAGE}${port.image}`} alt="project"/>
                     </div>
                   )
               })
            
          }
        </div>
      )
    }
  }

  return (
    <Div>
      <div className="container portfolio-page">

        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={"Portfolio".split("")}
              idx={15}
              letterClass={letterClass}
              />
          </h1>

          <div>{renderPortfolio(projects)}</div>
        </div>
      </div>
    </Div>
  )
}

export default Portfolio