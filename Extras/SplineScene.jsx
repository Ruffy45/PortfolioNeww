import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/3nnjXkXKugYOePqe/scene.splinecode');
    
  }, []);

  return(
    <div className='w-64 h-64 mx-auto'>
     <canvas id="canvas3d" />
     </div>
  );
};

export default SplineScene;
