import { Div } from "./Logo.elements"
import LogoS from '../../../assets/img/logoS.png';


const Logo = () => {  

  return (
    <Div >
        <img  src={LogoS} alt="logoSolid" className="solid-logo" />
    </Div>
  )
}

export default Logo