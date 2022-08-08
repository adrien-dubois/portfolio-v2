import { LogoContainer } from "./Logo.elements"
import LogoS from '../../../assets/img/logoS.png';
import { useRef } from "react";

const Logo = (props: any) => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

  return (
    <LogoContainer>
        <img src={LogoS} alt="logoSolid" className="solid-logo" />

        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 158.43 152.43"
    {...props}
  >
    <defs>
      <style>{".cls-1{fill:#008eab}.cls-2{fill:#00707d}"}</style>
    </defs>
    <g id="Calque_2" data-name="Calque 2">
      <g id="Camada_1" data-name="Camada 1">
        <path
          className="cls-1"
          d="m35.17 145.69 52.98-30.86H71.63L33.7 132.75l1.47 12.94z"
        />
        <path
          className="cls-2"
          d="M88.15 114.83v6.74l-52.98 30.86v-8.12l52.98-29.48z"
        />
        <path
          className="cls-2"
          d="M0 152.43h35.17L89.9 57.01 88.18 0 0 152.43z"
        />
        <path
          className="cls-1"
          d="M87.92 60.46 88.18 0l70.25 121.67h-35.26L87.92 60.46z"
        />
        <path className="cls-2" d="M88.18 0v12.29l44 63.93L88.18 0z" />
        <path
          style={{
            fill: "#00616a",
          }}
          d="M88.24 0v12.29l-44 63.93L88.24 0z"
        />
        <path className="cls-1" d="M77.87 102.72h10.05v-17.4l-10.05 17.4z" />
        <path className="cls-2" d="M87.92 85.32v17.4h10.04l-10.04-17.4z" />
      </g>
    </g>
  </svg>

    </LogoContainer>
  )
}

export default Logo