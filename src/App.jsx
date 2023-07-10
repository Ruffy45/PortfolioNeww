import { useState } from 'react'
import Navbar from './Navbar';
import Follow from './Follow';
import SplineScene from './SplineScene';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar />
      {/* <SplineScene />
     <Follow /> */}
      
    </div>
  )
}

export default App
