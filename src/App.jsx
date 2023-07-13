import { useState } from 'react'
import Navbar from './Navbar';
import Follow from '../Extras/Follow';
import SplineScene from '../Extras/SplineScene';
import CustomShapeDivider from './CustomShapeDivider';
import ScrollColorPanel from './ScrollColorPanel';
function App() {

  return (
   <div>
    <ScrollColorPanel />
       <Navbar />
      <CustomShapeDivider /> 
      
       {/* <SplineScene />
     <Follow />    */}
    </div>
  )
}

export default App
