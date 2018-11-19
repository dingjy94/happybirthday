import React from 'react';

import pusheen from '../images/pusheen.png';

function Loading() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#fbd2db'}}>
      <div style={{ position: 'absolute', display: 'block', height: '300px', width: '200px', top: '35%', left: '42.5%' }}>
        <img src={pusheen} style={{ height: '200px', width: '200px', top: '0', marginBottom: '0.2rem' }}/>
        <strong style={{color: '#4c2c14', fontSize: 'large', paddingLeft: '25%'}}>Loading...</strong>
      </div>
    </div>
  );
}

export default Loading;
