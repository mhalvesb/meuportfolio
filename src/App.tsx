import './App.css'
import React, {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {motion, useInView, useAnimation} from "framer-motion";

import {Link } from 'react-router-dom';
import {ComplementalSection, ContactButton, FirstSection, FiveSection, Footers, FourthSection, FullStack, MessageInput, MyName, NameAndEmailInputs, OtherSkills, Profession, SecondSection, SixLeft, SixRight, SixSection, SkillsDiv, ThirdSection, TwoSkills, TwoSkillsText, WebDev } from './index.styled'
import { SiExpress, SiPassport } from "react-icons/si";



  




function App() {
  const [nameMessage, setName] = useState<string>("");
  const [emailMessage, setEmail] = useState<string>("");
  const [messages, setMessages] = useState<string>("");



  const form = useRef<HTMLFormElement>(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value);
  }
  const handleChangeEmail = (e:  React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);
  }
  const handleChangeMessage = (e:  React.ChangeEvent<HTMLTextAreaElement>) =>{
    setMessages(e.target.value);
  }
    const sendEmail = (e: React.FormEvent) =>{
        e.preventDefault();
        if(form.current !== null){
          emailjs.sendForm("service_n9uuwh7", "template_2ur265p", form.current, "DI5JwdjRlOrkBjNmR").then((result) =>{
            
          });
        }
    }
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourRef = useRef(null);
    const fiveRef = useRef(null);
    const complementalRef = useRef(null);

    const secondSecView: boolean = useInView(secondRef, { once: true });
    const thirdSecView: boolean = useInView(thirdRef, { once: true });
    const fourSecView: boolean = useInView(fourRef, { once: true });
    const fiveSecView: boolean = useInView(fiveRef, { once: true });
    const complementalView: boolean = useInView(complementalRef, { once: true });

    const secondControlls = useAnimation();
    const thirdControlls = useAnimation();
    const fourControlls = useAnimation();
    const fiveControlls = useAnimation();
    const complementalControlls = useAnimation();

    useEffect(() =>{
      if(secondSecView){
        secondControlls.start("visible");
      }
      if(thirdSecView){
        thirdControlls.start("visible");
      }
      if(fourSecView){
        fourControlls.start("visible");
      }
      if(fiveSecView){
        fiveControlls.start("visible");
      } 
      
      if(complementalView){
        complementalControlls.start("visible");
      }
    }, [secondSecView, thirdSecView, fourSecView, fiveSecView, complementalView]);

    useEffect(() =>{
      
    }, [nameMessage, emailMessage, messages])
  return (
    <>
      <FirstSection>
        
        <Profession>
          <WebDev>Web Developer</WebDev> <span>/</span> <FullStack>FullStack</FullStack>
        </Profession>
        <MyName>Matheus Alves</MyName>
        <ContactButton>
          <p>Contact Me</p>
        </ContactButton>
        
        
      </FirstSection>

      <SecondSection ref={secondRef}>
        <motion.div style={{textAlign: "center", position: "relative"}} 
          variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y:0}}}
          initial="hidden"
          animate={secondControlls}
          transition={{duration: 0.5, delay: 0.25}}>

        
        <h3>Responsive Ecommerce Page</h3>
      <img src="/assets/images/LapTopEcommerce.png"/>
      <span/>
      </motion.div>
      </SecondSection>
      <ThirdSection ref={thirdRef}>
        <motion.div style={{textAlign: "center"}}
          variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y:0}}}
          initial="hidden"
          animate={thirdControlls}
          transition={{duration: 0.5, delay: 0.25}}>
          <h3>Starbucks Landing Page</h3>
          <img src="/assets/images/mymonitorstarbucks.png"></img>
        </motion.div>
        
      </ThirdSection>
        
      <FourthSection ref={fourRef}>
          <motion.div
          variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y:0}}}
          initial="hidden"
          animate={fourControlls}
          transition={{duration: 0.5, delay: 0.25}}>
            <h3>Responsive for Mobile</h3>
          </motion.div>
      </FourthSection>


        <ComplementalSection ref={complementalRef}>
          <motion.div 
          variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y:0}}}
          initial="hidden"
          animate={complementalControlls}
          transition={{duration: 0.5, delay: 0.25}}
          >
        <h3>More Projects</h3>

<h6>See more</h6>

          <div>
            <Link to="https://mhalvesb.github.io/projetostarbucks/">
              
              <img src="/assets/images/starbucks.png"></img>
              <p>Starbucks Landing Page</p>
              <span></span>
            </Link>
            <Link to="/">
            
              <img src="/assets/images/kenosis.png"></img>
              <p>Civil Construction Page</p>
              <span></span>
            </Link>
            <Link to="/">

              <img src="/assets/images/socialMedia1.png"></img>
              <p>Functional Social Media</p>
              <span></span>
            </Link>
            <Link to="/">
              <img src="/assets/images/img31.png"></img>
              <p>World-Wide Data</p>
              <span></span>
            </Link>
          </div>
        </motion.div>
      </ComplementalSection>


      <FiveSection ref={fiveRef}>
        <motion.div 
        variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y:0}}}
          initial="hidden"
          animate={fiveControlls}
          transition={{duration: 0.5, delay: 0.25}}>
                <h3>My Skills</h3>

        <h4>Front-End</h4>

        <SkillsDiv>
          <div>
            <img src="/assets/devicons/browser.png"></img>
            <p>HTML/CSS</p>
          </div>

          <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <p>JAVASCRIPT</p>
          </div>

          <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <p>REACT</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <p>TYPESCRIPT</p>
          </div>

        </SkillsDiv>


        <TwoSkills>
          
          <TwoSkillsText>
            
            
          </TwoSkillsText>
          
          <OtherSkills>
          <h4>Back-End</h4>
          <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            <p>NODE</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"></img>
            <p>MYSQL</p>
            
          </div>
        </OtherSkills>
        
        <SkillsDiv>
        <h4>Additional</h4>
          <div>
            <SiExpress/>
            <p>EXPRESS JS</p>
          </div>
          <div>
          <SiPassport />
            <p>PASSPORT</p>
          </div>

          <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"></img>
            <p>GEMINI AI</p>
          </div>

          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
            <p>GIT/GITHUB</p>
          </div>

          <div>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
            <p>VITE</p>
          </div>
          <div>
            <img src="/assets/devicons/ui-ux.png"></img>
            <p>UI/UX</p>
          </div>
          <div>
            <img src="/assets/devicons/api.png"></img>
            <p>RESTFUL API</p>
          </div>
        </SkillsDiv>


        </TwoSkills>
        </motion.div>
      </FiveSection>

      <SixSection>
        <SixLeft>
            <h4> GET IN TOUCH </h4>
              <div><img src="/assets/images/linkedin.png"></img> <p>Matheus Alves</p></div>
              <div><img src="/assets/images/gmail.png"></img> <p>matheus.alvesbr21@gmail.com</p></div>
              <div><img src="/assets/images/github.png"></img> <p>/mhalvesb</p></div>
              <div><img src="/assets/images/instagram.png"></img> <p>matheus.alvesbr21</p></div>
        </SixLeft>

        <SixRight ref={form} onSubmit={sendEmail}>
            <h4>DROP ME A MESSAGE</h4>
            <NameAndEmailInputs>
              <input type="text" name="user_name" id="user" onChange={handleChangeName} placeholder="NAME"></input>
              <input type="text" name="user_email" id="email" onChange={handleChangeEmail} placeholder="EMAIL"></input>
            </NameAndEmailInputs>
            <MessageInput>
              <textarea name="message" id="message" onChange={handleChangeMessage} placeholder="TYPE MESSAGE"></textarea>
            </MessageInput>
            <button type="submit">Send</button>
        </SixRight>
      </SixSection>

      <Footers>
        <p>All rights reserved created by <span>Matheus Alves</span> </p>
        
      </Footers>
    </>
  )
}

export default App
