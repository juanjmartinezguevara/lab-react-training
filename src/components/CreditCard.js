import React from 'react';
import { render } from 'react-dom';

function CreditCard(props) {
    return (
        <div style={{backgroundColor:`${props.bgColor}`, width:'30vw', margin:'1vw auto', borderRadius:'1vw',padding:'1vw'}}>
        <img src={type(props.type)}/>
        <p style={{fontSize: '2vw'}}>•••• •••• •••• {props.number.substr(-4)}</p>
        <p style={{fontSize: '1vw',textAlign:'left'}}>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}<br/>{props.owner}</p>
    </div>
    );
}

function type(type) {
    if (type === 'Visa') {
        return '../../public/img/visa.png'
    } else if (type === 'Master Card') {
        return '../../public/img/master-card.svg'
    }
}

export default CreditCard;