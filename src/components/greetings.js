import React from 'react';
import { render } from 'react-dom';

function Greetings(props) {
    return (
        <div>
            <p>{lang(props.lang)} {props.name}</p>
        </div>
    );
}

function lang(lang) {
    if (lang === 'de') {
        return "Hallo"
    }
    else if (lang === 'en') {
        return "Hello"
    }
    else if (lang === 'es') {
        return "Hola"
    }
    else if (lang === 'fr') {
        return "Bonjour"
    }
}

export default Greetings;