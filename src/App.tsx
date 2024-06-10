import './App.css'


import {Link } from 'react-router-dom';
import { ActiveLi, ComplementalSection, ContactButton, FirstSection, FirstSectionImg, FiveSection, Footers, FourthSection, FullStack, GrayLi, MessageInput, MyName, NameAndEmailInputs, OtherSkills, Profession, SecondSection, SixLeft, SixRight, SixSection, SkillsDiv, ThirdSection, TwoSkills, TwoSkillsText, WebDev } from './index.styled'

function App() {

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
        <FirstSectionImg src="./public/assets/images/sec1.png"></FirstSectionImg>
        
      </FirstSection>

      <SecondSection>
        <h3>Responsive Ecommerce Page</h3>
      <img src="./public/assets/images/LapTopEcommerce.png"/>
      <span/>
      </SecondSection>
      <ThirdSection>
        <h3>Starbucks Landing Page</h3>
        <img src="./public/assets/images/mymonitorstarbucks.png"></img>
        
      </ThirdSection>
        
      <FourthSection>
          <h3>Responsive for Mobile</h3>
      </FourthSection>


        <ComplementalSection>
        <h3>More Projects</h3>

<h6>See more</h6>

          <div>
            <Link to="https://www.starbucks.com">
              
              <img src="./public/assets/images/starbucks.png"></img>
              <p>Starbucks Landing Page</p>
              <span></span>
            </Link>
            <Link to="/">
            
              <img src="./public/assets/images/kenosis.png"></img>
              <p>Civil Construction Page</p>
              <span></span>
            </Link>
            <Link to="/">

              <img src="./publicc/assets/images/socialMedia1.png"></img>
              <p>Functional Social Media</p>
              <span></span>
            </Link>
            <Link to="/">
              <img src="./public/assets/images/img31.png"></img>
              <p>World-Wide Data</p>
              <span></span>
            </Link>
          </div>
        </ComplementalSection>
      <FiveSection>
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
      </FiveSection>

      <SixSection>
        <SixLeft>
            <h4> GET IN TOUCH </h4>
              <div><img src="./public/assets/images/linkedin.png"></img> <p>Matheus Alves</p></div>
              <div><img src="./public/assets/images/gmail.png"></img> <p>matheus.alvesbr21@gmail.com</p></div>
              <div><img src="./public/assets/images/github.png"></img> <p>/mhalvesb</p></div>
              <div><img src="./public/assets/images/instagram.png"></img> <p>matheus.alvesbr21</p></div>
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
