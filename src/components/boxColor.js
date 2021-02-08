import React from 'react'
import { render } from 'react-dom'

function BoxColor(props) {
    return (
        <div style={{border:'1px solid black', width:'40vw', margin:'1vw auto', lineHeight:'5vw', backgroundColor:`rgb(${props.r},${props.g},${props.b})`}}>
            rgb({props.r},{props.g},{props.b})
        </div>
    );
}

export default BoxColor;