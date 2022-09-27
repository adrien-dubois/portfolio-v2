import { Div } from "./Logo.elements"
import LogoS from '../../../assets/img/logoS.png';
import { SVGProps, useEffect, useRef } from "react";
import gsap from 'gsap';
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { LogoSolid } from "../../../assets/img";


const Logo = (props: SVGProps<SVGSVGElement>) => {

  const bgRef = useRef(null);
  const outlinLogoRef = useRef(null);
  const solidLogoRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined"){
      gsap.registerPlugin(DrawSVGPlugin)

      gsap.timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1
        })
        .from(outlinLogoRef.current, {
          drawSVG: 0,
          duration: 25,
        })

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 3
        }
      ) 
    }
  }, [])

  return (
    <Div ref={bgRef} >
      <img ref={solidLogoRef} src={LogoSolid} alt="logoSolid" className="solid-logo" />

      <svg
        id="Alphabet"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 681.17 724.25"
        {...props}
      >
        <defs>
          <style>{".cls-1{fill:transparent;stroke:#FFD700;}"}</style>
        </defs>
        <path
          ref={outlinLogoRef}
          className="cls-1"
          d="m856.53 921-.56-.57-118.08-638.94v-.16l-80.15-80.15-.05-.26h-.21l-1-1 .18 1H521.54l-343.4 638.53h5.69-6.08l81 81.38.15.15h136.78l-.85-.86 97-180.79h128.92l18.71 100.1h5.24-6.08l81 81.38.15.15h136.11l.24.24v-.24Zm-597.2-1-79.18-79.54 134-.44 79.11 80Zm135-1.1-79.36-80 .37-.69 95.51-177h.67l78.84 78.07.14.14h.15Zm98-180.55h-1.41l-78-77.21h193.22l14.43 77.21ZM412 660.14l121.34-.26-.13.26Zm228.29 178.31-18.52-99.1-.19-1-14.56-78v-.25H534.3l.14-.26.54-1h-1.14l-122.32.26h-2l.56.55-96 178.76H179.81l342.33-636.49h134.69l117.85 636.53ZM720.23 920 641 840.46l134.08-.46 79 80Zm55.52-81.29L658 202.93l78.9 78.89 117.6 636.41Z"
          transform="translate(-176.55 -198.44)"
        />
        <path
          className="cls-1"
          d="m556.51 388.73-.23-1.24-.35.66-.25.46-76.74 144-.39.73h104.89l-26.6-142.82ZM480.22 532.3l75.6-141.82 26.41 141.82Z"
          transform="translate(-176.55 -198.44)"
        />
      </svg>
    </Div>
  )
}

export default Logo