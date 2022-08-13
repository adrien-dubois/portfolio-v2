import { useEffect, useState } from "react";
import { FaCommentDots, FaEnvelope, FaUser } from "react-icons/fa";
import Loader from "react-loaders";
import Input from "../../utils/Input";
import { Div } from "../About/About.elements";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { ContactForm, InfoMap, MapWrap } from './Contact.elements';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const sendEmail = (e: any) => {
      e.preventDefault();

      let nameS = document.getElementById("name");
      let emailS = document.getElementById("email");
      let subjectS = document.getElementById("subject");
      let messageS = document.getElementById("message");
      let formMess: any = document.querySelector(".form-message");

      const isEmail = () => {
        let isMail: any = document.getElementById("not-mail");
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(email.match(regex)) {
          isMail.style.display = "none";
          return true;
        } else {
          isMail.style.display = "block";
          isMail.style.animation ="dongle 1s";
          setTimeout(()=> {
            isMail.style.animation = "none";
          }, 1000);
          return false;
        }
      };

      if(name && isEmail() && message) {
          nameS?.classList.remove("red");
          emailS?.classList.remove("red");
          messageS?.classList.remove("red");
          subjectS?.classList.remove("red");

          formMess.innerHTML = "Message en cours d'envoi...";
          formMess.style.background = "#115173";
          formMess.style.opacity = "1";


          emailjs
            .send(

              // service ID
              `${process.env.REACT_APP_EMAIL_SERVICE}` ,

              // temokate ID
              `${process.env.REACT_APP_EMAIL_TEMPLATE}`,

              {
                name,
                email,
                subject,
                message
              },

              // user ID
              `${process.env.REACT_APP_EMAIL_ID}`
            )
            .then(
              () => {
                formMess.innerHTML = "Message envoyé! Je vous recontacterais au plus vite.";

                  document.getElementById("name")?.classList.remove("error");
                  document.getElementById("email")?.classList.remove("error");
                  document.getElementById("message")?.classList.remove("error");
                  document.getElementById("subject")?.classList.remove("error");

                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");

                  setTimeout(() => {
                    formMess.style.opacity = "0";
                  }, 5000);
              },
              (err) => {
                console.log(err);
                formMess.style.background = "rgb(253, 87, 87)";
                formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer.";
              }
            );
      } else {
        formMess.innerHTML = "Merci de remplir correctement les champs.";
        formMess.style.background = "rgb(253, 87, 87)";
        formMess.style.opacity = "1";

        if(!name){
            nameS?.classList.add("error");
        }
        if (!email) {
          emailS?.classList.add("error");
        }
        if (!message) {
          messageS?.classList.add("error");
        }
        if(!subject) {
          subjectS?.classList.add("error");
        }
      }

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
                        handleChange={(e) => setName(e.target.value)}
                        idField="name"
                        value={name}
                      />
                    </li>

                    <li className="half">
                      <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <Input 
                          type='email' 
                          name='email' 
                          placeholder="E-Mail" 
                          icon={<FaEnvelope/>}
                          handleChange={(e) => setEmail(e.target.value)}
                          idField="email"
                          value={email}
                        />
                      </div>
                    </li>

                    <li>
                      <Input
                        type='text' 
                        placeholder="Sujet" 
                        name="subject"  
                        icon={<FaCommentDots/>}
                        handleChange={(e) => setSubject(e.target.value)}
                        idField="subject"
                        value={subject}
                      />
                    </li>

                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        value={message}
                      >
                      </textarea>
                    </li>

                    <li>
                      <input
                        type="submit"
                        className="flat-button"
                        value="Envoyer"
                        onClick={sendEmail}
                      />
                    </li>

                    <li>
                      <div className="form-message"></div>
                    </li>

                  </ul>
                </form>
              </ContactForm>

            </div>

            <InfoMap>
                Adrien Dubois,
                <br/>
                France,
                <br/>
                164 avenue des graviers,<br/>
                03200 Abrest<br/>
                <span>adrien-dubois@white-umbrella.fr</span>
            </InfoMap>

            <MapWrap>
              <MapContainer center={[46.11234, 3.43932]} zoom={13} >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[46.11234, 3.43932]}>
                    <Popup>
                      <b>White Umbrella Dev<br/>Adrien Dubois</b><br/>
                      J'habite ici! <br/>
                      Venez discuter de votre projet autour d'un café!
                    </Popup>
                  </Marker>
              </MapContainer>
            </MapWrap>

        </div>
        <Loader type="pacman" active/>
    </Div>
  )
}

export default Contact