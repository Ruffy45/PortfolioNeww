import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Follow = () => {
  useEffect(() => {

    const canvas = document.getElementById('canvasf3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/cgvAjDl9EZxiaAM8/scene.splinecode');
    
    
  }, []);

  return(
    <div>
        <h1 className='text -black font-bold flex justify-center'>
            Hi, my name is Prateek
        </h1>
    <div className=' h-full w-full'>
     <canvas id="canvasf3d" />
     </div>
    </div>
  );
};

export default Follow;