import React from 'react';
import { Section} from '../components';

import model3 from '../assets/tesla/Model-3-Homepage-Desktop-LHD.jpeg';
import solarRoof from '../assets/tesla/Homepage-SolarRoof-Desktop-Global.jpeg';
import modelX from '../assets/tesla/Homepage-Model-X-Desktop-LHD.jpeg';
import modelS from '../assets/tesla/Homepage-Model-S-Desktop-LHD.jpeg';
import solarPanels from '../assets/tesla/_25-HP-SolarPanels-D.jpeg';
import accessories from '../assets/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg';
import modelY from '../assets/tesla/Desktop-ModelY.jpeg'; 
import ErrorBoundary from '../components/ErrorBoundary';
import { FiChevronDown } from "react-icons/fi";
import { Footer} from '../layouts/index';
// import { carModelInfo, carModelInfoTwo } from '../data/dummy'
import './homePage.css';


// const ModelCar = () => (
//     <div>
//         <h1 className="header__line font-semibold font-roboto">Model 3</h1>
//             <p className="header__body">Order Online for 
//             <a href="/" alt="touch" className="underline decoration-1 decoration-slate-900 hover:decoration-slate-900 hover:decoration-2 cursor-pointer ml-2">
//                 Touchless Delivery
//             </a>
//         </p>
//     </div>
// );

const OurFallbackComponent = ({ error, componentStack, resetErrorBoundary }) => {
    return (
      <div>
        <h1>An error occurred: {error.message}</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
};

const homePage = () => {
  return (
        <div style={{ height: '100vh' }}>
            <ErrorBoundary
            FallbackComponent={OurFallbackComponent}
            >
                <div>
                    <Section 
                        title="Model 3"
                        description="Leasing starting at $349/mo"
                        underline=""
                        primary='Custom Order' 
                        backgroundImg={model3}
                        // backgroundImg='https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x5760/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto'
                        secondary='Demo Drive'
                        icon={<FiChevronDown/>}
                    />
                    <Section 
                        title="Model Y"
                        description=""
                        underline=""
                        backgroundImg={modelY}
                        primary='Custom Order' 
                        secondary='Demo Drive'
                    />
                    <Section 
                        title="Model S"
                        description=""
                        underline="Schedule a Demo Drive"
                        backgroundImg={modelS}
                        primary='Custom Order' 
                        secondary='View Inventory'
                    /> 
                    <Section 
                        title="Model X"
                        description=""
                        underline="Schedule a Demo Drive"
                        backgroundImg={modelX}
                        primary='Custom Order' 
                        secondary='View Inventory'
                    /> 
                    <Section 
                        title="Solar Panels"
                        description="Lowest Cost Solar Panels in America"
                        backgroundImg={solarPanels}
                        primary='Order Now' 
                        secondary='Learn Now'
                    /> 
                    <Section 
                        title="Solar Roof"
                        description="Produce Clean Energy From Your Roof"
                        backgroundImg={solarRoof}
                        primary='Order Now' 
                        secondary='Learn Now'
                    /> 
                    <Section 
                        title="Accessories"
                        backgroundImg={accessories}
                        primary='Shop Now' 
                    />  

                {/* {
                    carModelInfo.map((carModel, index)=> (
                        <TeslaCar key={index} imgSrc={carModel.carImage} modelText={carModel.template} primary={carModel.primary} secondary={carModel.secondary} icon={carModel.icon}/>
                        
                    ))
                } */}
                <Footer/> 
                </div>
                {/* <div style={{ position: 'absolute', bottom: '710px', left: '459px'}}>

                {
                    carModelInfoTwo.map((carModel, index)=> (
                        <TeslaCar key={index} imgSrc={carModel.carImage} modelText={carModel.template} primary={carModel.primary} secondary={carModel.secondary} icon={carModel.icon}/>
                        
                    ))
                }
                </div> */}
                {/* <PrimaryButton/> */}
                {/* <ModelCar/>  */}                
            </ErrorBoundary>
        </div>
    );
}

export default homePage;