import React from 'react'
// import { FiChevronDown } from "react-icons/fi";
import PrimaryButton from '../PrimaryButton/primaryButton';
import SecondaryButton from '../SecondaryButton/secondaryButton';
import Fade from 'react-reveal/Fade';
import './section.css'

const Section = ({primary, secondary, underline, description, title, icon, backgroundImg}) => {
  return (
    <div 
    // color: '#475569'
    bgImage={backgroundImg}
    className="section__header"
    style={{position: 'relative', zIndex:2, backgroundImage: "url(" + backgroundImg + ")"}}>
      <div>
        <Fade bottom>
          <h1 
            className="header__line font-semibold font-rubik"
          >
            {title}
          </h1>
          <p 
            className="header__body"
          >{description}
            <a href="/" alt="touch" className="underline decoration-1 underline-offset-2 decoration-slate-900 hover:decoration-slate-900 hover:decoration-2 cursor-pointer ml-1">
              {underline}
            </a>
          </p>
        </Fade>
      </div>
      <div className="buttons">
      <Fade top>
        <div className="section__buttonGroup">
          <PrimaryButton
            color="white"
            bgColor="#3a3e42"
            text={primary}
            borderRadius="5px"
            width="96"
            size=""
            fontSize="14px"
            fontWeight="600"
            lineHeight="1.3"
          />
          {
            secondary && 
          <SecondaryButton
            color="#4e5155"
            bgColor="#e7e7e6"
            text={secondary}
            borderRadius="5px"
            width="96"
            size=""
            fontSize="14px"
            fontWeight="600"
            lineHeight="1.3"
          />
          }
            
          {/* <button className="section__leftButton"> Custom Button</button>
          <button className="section__leftButton"> Existing Button </button> */}
        </div>
        <div className="section__icon">
          {icon}
        </div>
      </Fade>
      </div>
    </div>
  )
}

export default Section;