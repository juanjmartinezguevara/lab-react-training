import React from 'react';
import { render } from 'react-dom';

function Random(props) {
    return (
        <p>Random value between {props.min} and {props.max} => {getRandom(props.min, props.max)}</p>
    );
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Random;