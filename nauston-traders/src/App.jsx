import { useState } from 'react'

import './App.css'
import Table from './components/Table'

function App() {


  return (
    <div className="App">
     <div className='heading-app'>
      Table of Random Data fetched From rest API...
     </div>

       <Table />


    </div>
  )
}

export default App
