import React from 'react';

import './image.css';

//images
import first from '../images/1.jpeg';
import second from '../images/2.jpeg';
import third from '../images/3.jpeg';
import fourth from '../images/4.jpeg';
import fifth from '../images/5.jpg';
import sixth from '../images/6.jpg';
import seventh from '../images/7.jpeg';
import ninth from '../images/9.jpeg';
import tenth from '../images/10.jpg';
import eleventh from '../images/11.jpg';
import tweleveth from '../images/12.jpg';

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
    <img class="pic pic1" src={first} />
    <img class="pic pic2" src={second} />
    <img class="pic pic3" src={third} />
    <img class="pic pic4" src={fourth} />
    <img class="pic pic5" src={fifth} />
    <img class="pic pic6" src={sixth} />
    <img class="pic pic7" src={seventh} />
    <img class="pic pic9" src={ninth} />
    <img class="pic pic10" src={tenth} />
    <img class="pic pic11" src={eleventh} />
    <img class="pic pic12" src={tweleveth} />
  </div>
);

 export default Image;
