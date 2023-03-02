import React from 'react'
// import './ButtonPrimary.css'

const PrimaryButton = ({lineHeight, fontWeight, bgColor, color, bgHoverColor, size, text, borderRadius, width, border,fontSize }) => {


    return (
        <button
            type="button"
            // onClick={()=> setIsClicked(initialState)}
            style={{lineHeight, fontWeight, fontSize, backgroundColor: bgColor, color, borderRadius, border, width}}
            className={`font-bold uppercase font-blink text-${size} p-3 w-${width} hover:drop-shadow-xs hover:bg-${bgHoverColor} md:w-full sm:w-full xs:w-7`}
        >
            {text}
        </button>
    )
}

export default PrimaryButton;