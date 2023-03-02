import React, {useState} from 'react';

import { FiX } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import './Menu.css'

const Menu = ({setIsMenu}) => {

    const [isActive, setIsActive] = useState(false);

    const touchButton = () => {
        const advancedButton = document.querySelector('.backdrop__holder')
        const changeButton = document.querySelector('.backdrop__holder').firstElementChild;
        // changeButton.classList.remove('backdrop__blur');
        // changeButton.classList.add('black__out');
        // advancedButton.classList.add('black__out');
        // advancedButton.classList.remove('backdrop__holder')
        console.log("convention..", advancedButton, changeButton)


        
    }
    const handleClick = () => {
        setIsMenu(false)
        setIsActive(currentActive => !currentActive);
        // const advancedButton = document.querySelector('.backdrop__holder')
        // const changeButton = document.querySelector('.backdrop__holder').firstElementChild;
        // changeButton.classList.add('backdrop__blur');
        // advancedButton.classList.remove('black__out');
        // changeButton.classList.remove('black__out');
        // advancedButton.classList.add('black__out');
        // advancedButton.classList.add('backdrop__holder')
        // console.log("mikel obi...", advancedButton, changeButton)
        const tabHolder = document.querySelector('.tab__holder');
        console.log("Guilty>>>", tabHolder)
        tabHolder.classList.remove('tab__holder');
        tabHolder.classList.add('slide__In');
        console.log("landing....", tabHolder);
        touchButton();
        // toogleButton();

    }

    const toogleButton = () => {
        const tabHolder = document.querySelector('.tab__holder');
        tabHolder.classList.remove('tab__holder');
        tabHolder.classList.add('slide__In');

        const advancedButton = document.querySelector('.backdrop__holder')
        const changeButton = document.querySelector('.backdrop__holder').firstElementChild;
        changeButton.classList.remove('backdrop__blur');
        advancedButton.classList.add('black__out');
        advancedButton.classList.remove('backdrop__holder')
        changeButton.classList.add('black__out');
        console.log("first....", changeButton.className)
    }

  
    // <button className="text-2xl"  >
    return (
        <div className="backdrop__holder h-screen bg-half-transparent w-screen fixed nav-item top-0 right-0">
            <div onClick={handleClick} 
                className="backdrop__blur float-right h-screen dark:text-gray-800 bg-[#abaead] dark:bg-[#484B52] w-full opacity-80" 
                style={{ position: 'absolute', zIndex: 16, right: '0px', top: '-1px'}}
            ></div>
            <div 
            className='tab__holder float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-72'
                style={{ position: 'absolute', zIndex: 16, right: '0px', top: '-1px'}}
            >
                <div className="flex justify-between items-center p-4">
                    <button
                        // style={{color: currentColor}} 
                        onClick={handleClick} 
                        className="button__menu text-2xl p-2"
                    >
                        <FiX/>
                    </button>
                </div>

                <div className=" h-screen flex border-color md:overflow-auto overflow-auto md:hover:overflow-auto" style={{ position: 'relative', zIndex:16}}>
                    <ul className="font-Arial flex-col justify-between items-center p-4 ml-4">
                        <li className="sidebar__holder font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:16}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Existing Inventory</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full">
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Used Inventory</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Trade In</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Test Drive</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Insurance</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Cybertruck</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Roadster</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Semi</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Charging</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Powerwall</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Commercial Energy</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Utilities</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Find Us</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Support</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <span className="relative left-1">Investor Relations</span>
                            </a>
                        </li>
                        <li className="sidebar__holder mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <div className="relative left-1 font-normal" style={{ fontSize: '22px', display: 'flex'}}>
                                    <TbWorld/> <span className="relative left-2 font-semibold bottom-1 text-base">United States</span>
                                </div>
                                <p className="relative left-9 font-light bottom-1 text-base">English</p>
                            </a>
                        </li>
                        <li className="sidebar__holder h-11 mt-2 font-sans text-base font-semibold p-2 w-full" style={{ position: 'relative', zIndex:6000}}>
                            <a href="/" className="cursor-pointer">
                                <div className="relative left-1">
                                    <div className="text-lg">
                                        {/* <TbWorld/>  */}
                                    </div>
                                        <span>United States</span>
                                    <p className="relative left-3">English</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
  
export default Menu;