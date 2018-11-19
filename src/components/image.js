import React from 'react';

import './image.scss';

//images
import dec1 from '../images/dec1.jpg';
import dec2 from '../images/dec2.jpg';
import dec3 from '../images/dec3.jpg';
import dec4 from '../images/dec4.jpg';
import dec5 from '../images/dec5.jpg';
import dec6 from '../images/dec6.jpg';
import dec7 from '../images/dec7.jpg';
import dec8 from '../images/dec8.jpg';
import jan1 from '../images/jan1.jpg';
import jan2 from '../images/jan2.jpg';
import jan3 from '../images/jan3.jpg';
import jan4 from '../images/jan4.jpg';
import feb1 from '../images/feb1.jpg';
import feb2 from '../images/feb2.jpg';
import feb3 from '../images/feb3.jpg';
import feb4 from '../images/feb4.jpg';
import feb5 from '../images/feb5.jpg';
import feb6 from '../images/feb6.jpg';
import mar1 from '../images/mar1.jpg';
import mar2 from '../images/mar2.jpg';
import mar3 from '../images/mar3.jpg';
import mar4 from '../images/mar4.jpg';
import apr1 from '../images/apr1.jpg';
import apr2 from '../images/apr2.jpg';
import apr3 from '../images/apr3.jpg';
import may1 from '../images/may1.jpg';
import may2 from '../images/may2.jpg';
import may3 from '../images/may3.jpg';
import may4 from '../images/may4.jpg';
import may5 from '../images/may5.jpg';
import jun1 from '../images/jun1.jpg';
import jun2 from '../images/jun2.jpg';
import jun3 from '../images/jun3.jpg';
import jul1 from '../images/jul1.jpg';
import jul2 from '../images/jul2.jpg';
import jul3 from '../images/jul3.jpg';
import aug1 from '../images/aug1.jpg';
import aug2 from '../images/aug2.jpg';
import aug3 from '../images/aug3.jpg';
import aug4 from '../images/aug4.jpg';
import sep1 from '../images/sep1.jpg';
import sep2 from '../images/sep2.jpg';
import sep3 from '../images/sep3.jpg';
import sep4 from '../images/sep4.jpg';
import sep5 from '../images/sep5.jpg';
import sep6 from '../images/sep6.jpg';
import sep7 from '../images/sep7.jpg';
import sep8 from '../images/sep8.jpg';
import oct1 from '../images/oct1.jpg';
import oct2 from '../images/oct2.jpg';
import oct3 from '../images/oct3.jpg';
import oct4 from '../images/oct4.jpg';
import oct5 from '../images/oct5.jpg';
import oct6 from '../images/oct6.jpg';
import oct7 from '../images/oct7.jpg';
import oct8 from '../images/oct8.jpg';
import nov1 from '../images/nov1.jpg';
import nov2 from '../images/nov2.jpg';
import nov3 from '../images/nov3.jpg';
import nov4 from '../images/nov4.jpg';


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <div id="container">
    <div className="monthContainer">
      <img className="pic pic1" src={dec1} />
      <img className="pic pic2" src={dec2} />
      <img className="pic pic3" src={dec3} />
      <img className="pic pic4" src={dec4} />
      <img className="pic pic5" src={dec5} />
      <img className="pic pic6" src={dec6} />
      <img className="pic pic7" src={dec7} />
      <img className="pic pic8" src={dec8} />
      <span className="title">December</span>
    </div>

    <div className="monthContainer1">
      <img className="pic pic1" src={jan1} />
      <img className="pic pic2" src={jan2} />
      <img className="pic pic3" src={jan3} />
      <img className="pic pic4" src={jan4} />
      <span className="title">January</span>
    </div>

    <div className="monthContainer2">
      <img className="pic pic1" src={feb1} />
      <img className="pic pic2" src={feb2} />
      <img className="pic pic3" src={feb3} />
      <img className="pic pic4" src={feb4} />
      <img className="pic-x pic5" src={feb5} />
      <img className="pic pic6" src={feb6} />
      <span className="title">February</span>
    </div>

    <div className="monthContainer3">
      <img className="pic pic1" src={mar1} />
      <img className="pic pic2" src={mar2} />
      <img className="pic pic3" src={mar3} />
      <img className="pic-x pic4" src={mar4} />
      <span className="title">March</span>
    </div>

    <div className="monthContainer4">
      <img className="pic pic1" src={apr1} />
      <img className="pic pic2" src={apr2} />
      <img className="pic-x pic3" src={apr3} />
      <span className="title">April</span>
    </div>

    <div className="monthContainer5">
      <img className="pic pic1" src={may1} />
      <img className="pic pic2" src={may2} />
      <img className="pic-x pic3" src={may3} />
      <img className="pic-x pic4" src={may4} />
      <img className="pic-x pic5" src={may5} />
      <span className="title">May</span>
    </div>

    <div className="monthContainer6">
      <img className="pic-x pic1" src={jun1} />
      <img className="pic pic2" src={jun2} />
      <img className="pic pic3" src={jun3} />
      <span className="title">June</span>
    </div>

    <div className="monthContainer7">
      <img className="pic pic1" src={jul1} />
      <img className="pic-x pic2" src={jul2} />
      <img className="pic-x pic3" src={jul3} />
      <span className="title">July</span>
    </div>

    <div className="monthContainer8">
      <img className="pic pic1" src={aug1} />
      <img className="pic pic2" src={aug2} />
      <img className="pic pic3" src={aug3} />
      <img className="pic pic4" src={aug4} />
      <span className="title">August</span>
    </div>

    <div className="monthContainer9">
      <img className="pic pic1" src={sep1} />
      <img className="pic pic2" src={sep2} />
      <img className="pic pic3" src={sep3} />
      <img className="pic-x pic4" src={sep4} />
      <img className="pic pic5" src={sep5} />
      <img className="pic pic6" src={sep6} />
      <img className="pic pic7" src={sep7} />
      <img className="pic pic8" src={sep8} />
      <span className="title">September</span>
    </div>

    <div className="monthContainer10">
      <img className="pic pic1" src={oct1} />
      <img className="pic pic2" src={oct2} />
      <img className="pic pic3" src={oct3} />
      <img className="pic pic4" src={oct4} />
      <img className="pic pic5" src={oct5} />
      <img className="pic pic6" src={oct6} />
      <img className="pic pic7" src={oct7} />
      <img className="pic pic8" src={oct8} />
      <span className="title">October</span>
    </div>

    <div className="monthContainer11">
      <img className="pic pic1" src={nov1} />
      <img className="pic pic2" src={nov2} />
      <img className="pic pic3" src={nov3} />
      <img className="pic pic3" src={nov4} />
      <span className="title">November</span>
    </div>
  </div>
);

 export default Image;
