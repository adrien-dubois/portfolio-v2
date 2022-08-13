import { useEffect, useState } from "react";
import { FaCommentDots, FaEnvelope, FaUser } from "react-icons/fa";
import Loader from "react-loaders"
import Input from "../../utils/Input";
import { Div } from "../About/About.elements";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { ContactForm } from "./Contact.elements";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [error, setError] = useState<boolean>(false);

    const onChange = () => {

    }

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    
  return (
    <Div>
        <div className="container contact-page">
            <div className="text-zone">
              <h1>
                  <AnimatedLetters
                      strArray={"Contactez-moi".split("")}
                      letterClass={letterClass}
                      idx={15}
                  />
              </h1>

              <p>
                Esse mollit exercitation mollit sit enim ea proident irure aute. Tempor qui tempor nisi do proident fugiat eu sint minim occaecat dolore. Et elit ex duis irure sint velit. Ullamco tempor magna ut pariatur Lorem laboris deserunt commodo enim eiusmod reprehenderit fugiat magna velit.
              </p>

              <ContactForm>
                <form>
                  <ul>

                    <li className="half">
                      <Input 
                        type='text' 
                        name='name' 
                        placeholder="Nom" 
                        icon={<FaUser/>}
                        handleChange={onChange}
                        error={error}
                      />
                    </li>

                    <li className="half">
                      <Input 
                        type='email' 
                        name='email' 
                        placeholder="E-Mail" 
                        icon={<FaEnvelope/>}
                        handleChange={onChange}
                        error={error}
                      />
                    </li>

                    <li>
                      <Input
                        type='text' 
                        placeholder="Sujet" 
                        name="subject"  
                        icon={<FaCommentDots/>}
                        handleChange={onChange}
                        error={error}
                      />
                    </li>

                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      >
                      </textarea>
                    </li>

                    <li>
                      <input
                        type="submit"
                        className="flat-button"
                        value="Envoyer"
                      />
                    </li>

                  </ul>
                </form>
              </ContactForm>

            </div>
        </div>
        <Loader type="pacman" active/>
    </Div>
  )
}

export default Contact