import React from 'react';

import './mail.scss';

//images
import mail from '../images/mail.jpg';


const Mail = () => (
  <div id="mailContainer">
    <img className="mail" src={mail} />
    <span>点我</span>
  </div>
);

export default Mail;
