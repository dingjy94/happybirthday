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
      <img className="pic pic9" src={dec8} />
      <span className="title">December 2017</span></div>
  </div>
);

 export default Image;
