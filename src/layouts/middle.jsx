import React from 'react';
import { TeslaCar} from '../components';
// import modelS from '../assets/tesla/Homepage-Model-S-Desktop-LHD.jpeg'
// import model3 from '../assets/tesla/M3-Homepage-Desktop-LHD.jpeg';
import ErrorBoundary from '../components/ErrorBoundary';
import { carModelInfoTwo } from '../data/dummy'
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
        <div>
            <ErrorBoundary
            FallbackComponent={OurFallbackComponent}
            >
                {/* <div>
                    
                {
                    carModelInfo.map((carModel, index)=> (
                        <TeslaCar key={index} imgSrc={carModel.carImage} modelText={carModel.template} primary={carModel.primary} secondary={carModel.secondary} icon={carModel.icon}/>
                        
                    ))
                }
                </div> */}
                <div >

                {
                    carModelInfoTwo.map((carModel, index)=> (
                        <TeslaCar key={index} imgSrc={carModel.carImage} modelText={carModel.template} primary={carModel.primary} secondary={carModel.secondary} icon={carModel.icon}/>
                        
                    ))
                }
                </div>
                {/* <PrimaryButton/> */}
                {/* <ModelCar/>  */}
                
            </ErrorBoundary>
        </div>
    );
}

export default homePage;