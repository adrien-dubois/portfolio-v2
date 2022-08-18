import { FunctionComponent } from "react"
import IsEmpty from '../../utils/IsEmpty';
import { Div } from "./RenderPortfolio.elements";


interface Props {
    portfolio: any
}

const RenderPortfolio: FunctionComponent<Props> = ({ portfolio }) => {

        return(
            
            <Div>
                { !IsEmpty(portfolio) &&
                <div className="images-container">
                  { 
                      Object.values(portfolio).map(( port: any, idx: any) => {
                           return(
                             <div className="image-box" key={idx}>
                                <img 
                                  src={`${process.env.REACT_APP_API_IMAGE}${port.image}`} 
                                  alt="project"
                                  className="portfolio-image"
                                />
        
                                <div className="content">
                                  <p className="title">{port.name}</p>
                                  <h4 className="description">{port.description}</h4>
                                  <button 
                                    className="btn" 
                                    onClick={() => window.open(port.url)}
                                  >
                                    Voir
                                  </button>
                                </div>
        
                             </div>
                           )
                       })
                    
                  }
                </div>
                }
            </Div>
        )
      
}

export default RenderPortfolio