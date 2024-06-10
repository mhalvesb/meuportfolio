import './App.css'
import {useEffect, useRef} from "react";

import {motion, useInView, useAnimation} from "framer-motion";

import {Link } from 'react-router-dom';
import { ActiveLi, ComplementalSection, ContactButton, FirstSection, FiveSection, Footers, FourthSection, FullStack, GrayLi, MessageInput, MyName, NameAndEmailInputs, OtherSkills, Profession, SecondSection, SixLeft, SixRight, SixSection, SkillsDiv, ThirdSection, TwoSkills, TwoSkillsText, WebDev } from './index.styled'




  




function App() {
  

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
        <motion.div 
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
            <Link to="https://www.starbucks.com">
              
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
            <p>HTML/CSS</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
            </ul>
            <span>100%</span>
          </div>

          <div>
            <p>JAVASCRIPT</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>80%</span>
          </div>

          <div>
            <p>REACT</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>80%</span>
          </div>

          <div>
            <p>TYPESCRIPT</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>50%</span>
          </div>

        </SkillsDiv>


        <TwoSkills>
          
          <TwoSkillsText>
            
            
          </TwoSkillsText>
          
          <OtherSkills>
          <h4>Back-End</h4>
          <div>
            <p>NODE</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>80%</span>
          </div>

          <div>
            <p>MYSQL</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>70%</span>
          </div>
        </OtherSkills>
        <OtherSkills>
        <h4>Additional</h4>
          <div>
            <p>GIT/GITHUB</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
            </ul>
            <span>100%</span>
          </div>

          <div>
            <p>UI/UX</p>
            <ul>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <ActiveLi></ActiveLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
              <GrayLi></GrayLi>
            </ul>
            <span>60%</span>
          </div>
          </OtherSkills>


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

        <SixRight>
            <h4>DROP ME A MESSAGE</h4>
            <NameAndEmailInputs>
              <input type="text" placeholder="NAME"></input>
              <input type="text" placeholder="EMAIL"></input>
            </NameAndEmailInputs>
            <MessageInput>
              <textarea placeholder="TYPE MESSAGE"></textarea>
            </MessageInput>
            <button>Send</button>
        </SixRight>
      </SixSection>

      <Footers>
        <p>All rights reserved created by <span>Matheus Alves</span> </p>
        
      </Footers>
    </>
  )
}

export default App
