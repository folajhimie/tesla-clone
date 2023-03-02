import React from 'react'
// import './ButtonPrimary.css'

const SecondaryButton = ({fontWeight, lineHeight, bgColor, color, bgHoverColor, size, text, borderRadius, width, border, fontSize}) => {


    return (
        <button
            type="button"
            // onClick={()=> setIsClicked(initialState)}
            style={{fontWeight, lineHeight, fontSize, backgroundColor: bgColor, color, borderRadius, border, width}}
            className={`uppercase font-blink text-${size} p-3 w-${width} hover:drop-shadow-xs hover:bg-${bgHoverColor}`}
        >
            {text}
        </button>
    )
}

export default SecondaryButton;