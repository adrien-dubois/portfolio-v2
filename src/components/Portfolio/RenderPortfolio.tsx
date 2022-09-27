import { FunctionComponent, useState } from "react"
import IsEmpty from '../../utils/IsEmpty';
import Modal from "../Modal/Modal";
import { Div } from "./RenderPortfolio.elements";


interface Props {
    portfolio: any
}

const RenderPortfolio: FunctionComponent<Props> = ({ portfolio }) => {

    const [open, setOpen] = useState<boolean>(false);

        return(
            
            <Div>
              { !IsEmpty(portfolio) &&
                <div className="images-container">
                { 
                      Object.values(portfolio).map(( port: any, idx: any) => (
                        <>
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
                                    onClick={() => setOpen(!open)}
                                  >
                                    Voir
                                  </button>
                                </div>
                              
                             </div>
                           
                          { open && 
                          <Modal 
                              showModal={open} 
                              setShowModal={setOpen}
                              projectDatas={port}
                              />
                          }
                        </>
                      ))
                    
                }
                </div>
              }
              
            </Div>
        )
      
}

export default RenderPortfolio