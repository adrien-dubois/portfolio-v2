import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import * as api from '../../api';
import { Div } from "./Portfolio.elements";
import RenderPortfolio from "./RenderPortfolio";

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

  return (
    <Div>
      <div className="container portfolio-page">

          <h1 className="page-title">
            <AnimatedLetters
              strArray={"Portfolio".split("")}
              idx={15}
              letterClass={letterClass}
              />
          </h1>

          <div> 
            <RenderPortfolio portfolio={projects}/> 
          </div>

      </div>
    </Div>
  )
}

export default Portfolio