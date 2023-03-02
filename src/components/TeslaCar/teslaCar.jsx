import React from 'react'
import PrimaryButton from '../PrimaryButton/primaryButton';
import SecondaryButton from '../SecondaryButton/secondaryButton';

import './teslaCar.css'

function TeslaCar({imgSrc, modelText, primary, secondary, icon, testDrive}) {
  return (
    <div className='car'>
      <div className='car__image'>
        <img src={imgSrc} alt='' />
      </div>
      
      <div className='car__model'>{modelText}</div>
      {/* {modelText} */}
      {/* {primary}
      {secondary} */}
      <div className='car_actions md:fixed sm:fixed lg:fixed'>
        <PrimaryButton
          color="white"
          bgColor="#3a3e42"
          text={primary}
          borderRadius="2px"
          width="96"
          size="lg"
        />
        <SecondaryButton
          color="#4e5155"
          bgColor="#e7e7e6"
          text={secondary}
          borderRadius="20px"
          width="96"
          size="lg"
        />

        {/* <ButtonPrimary name='order' />
        {testDrive && <ButtonSecondary name='test drive' />} */}
      </div>
      <div className="car__icon animate__animated animate__bounce">{icon}</div>
      {/* <p className='car__info'>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </p> */}
    </div>
  )
}

export default TeslaCar;