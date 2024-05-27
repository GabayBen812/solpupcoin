import { useState } from 'react'
import solpup from './assets/logo1.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='container' style={{ backgroundImage: `url(${solpup})` }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
          <h1 className='mainText'>Join Us To The Pups Revolution...</h1>
        </div>

      </div>
        

  )
}

export default App
