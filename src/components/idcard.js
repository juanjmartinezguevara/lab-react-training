import React from 'react';
import { render } from 'react-dom';

function IdCard(props) {
  return (
    <div>
      <img src={props.picture} alt=''/>
      <ul>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birth:</b> {props.birth}</p>
      </ul>
    </div>
  );
}

export default IdCard;
