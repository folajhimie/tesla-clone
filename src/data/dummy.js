import model3 from '../assets/tesla/Model-3-Homepage-Desktop-LHD.jpeg';
// import solarRoof from '../assets/tesla/Homepage-SolarRoof-Desktop-Global.jpeg';
import modelX from '../assets/tesla/Homepage-Model-X-Desktop-LHD.jpeg';
// import modelS from '../assets/tesla/Homepage-Model-S-Desktop-LHD.jpeg';
// import solarPanels from '../assets/tesla/_25-HP-SolarPanels-D.jpeg';
// import accessories from '../assets/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg';
import modelY from '../assets/tesla/Desktop-ModelY.jpeg'; 
import { FiChevronDown } from "react-icons/fi";





export const ModelCar = () => (
    <>
        <h1 
            className="header__line font-semibold font-sans"
            style={{position: 'relative', top:'40px', left: '585px', zIndex: '10', fontSize:'40px', textAlign: 'center', width: '20%', marginTop: '100px', letterSpacing: '.19rem'}}
        >
            Model 3
        </h1>
            <p 
                className="header__body"
                style={{fontSize:'14px', position: 'absolute',  bottom:'-60px', left: '515px', zIndex: '10', textAlign: 'center', width: '30%', marginTop: '60px', fontWeight: 'lighter', letterSpacing: '.001rem'}}
            >Order Online for 
            <a href="/" alt="touch" className="underline decoration-1 underline-offset-2 decoration-slate-900 hover:decoration-slate-900 hover:decoration-2 cursor-pointer ml-1">
                Touchless Delivery
            </a>
        </p>
    </>
);

export const ModelCarY = () => (

    <div>
        <h1 
            className="header__line font-semibold font-sans"
            style={{position: 'relative', top:'40px', left: '1585px', zIndex: '10', fontSize:'40px', textAlign: 'center', width: '20%', marginTop: '100px', letterSpacing: '.19rem'}}
        >
            Model Y
        </h1>
            <p 
                className="header__body"
                style={{fontSize:'14px', position: 'absolute',  bottom:'-60px', left: '515px', zIndex: '10', textAlign: 'center', width: '30%', marginTop: '60px', fontWeight: 'lighter', letterSpacing: '.001rem'}}
            >Order Online for 
            <a href="/" alt="touch" className="underline decoration-1 underline-offset-2 decoration-slate-900 hover:decoration-slate-900 hover:decoration-2 cursor-pointer ml-1">
                Touchless Delivery
            </a>
        </p>
    </div>
);


export const carModelInfo = [

    { 
        // carImage: model3,
        template: <ModelCar/>,
        primary: 'CUSTOM ORDER',
        secondary: 'EXISTING INVENTORY',
        icon: <FiChevronDown/>,
    },
    // { 
    //     carImage: modelY,
    //     template: <ModelCarY/>,
    //     primary: 'CUSTOM ORDER',
    //     secondary: 'EXISTING INVENTORY',
    // },
    // { 
    //     carImage: modelX,
    //     template: <ModelCar/>,
    //     primary: 'CUSTOM ORDER',
    //     secondary: 'EXISTING INVENTORY',
    // },

];

export const carModelInfoTwo = [
    { 
        carImage: modelY,
        template: <ModelCarY/>,
        primary: 'CUSTOM ORDER',
        secondary: 'EXISTING INVENTORY',
    },
]
