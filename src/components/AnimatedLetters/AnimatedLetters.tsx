import { FunctionComponent } from "react"
import { Span } from "./AnimatedLetters.elements"

type Props = {
    letterClass: any,
    strArray: any[],
    idx: any
}

const AnimatedLetters: FunctionComponent<Props> = ({ letterClass, strArray, idx }) => {

  return (
    <Span>
        {
            strArray.map((char: any, i: any) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`} >
                    {char}
                </span>
            ))
        }
    </Span>
  )
}

export default AnimatedLetters