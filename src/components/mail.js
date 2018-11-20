import React from 'react';

import './mail.scss';

//images
import mail from '../images/mail.jpg';


const Mail = ({onClick}) => (
  <div id="mailContainer" onClick={onClick}>
    <img className="mail" src={mail} />
    <span>点我</span>
  </div>
);

export default Mail;
