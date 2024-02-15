import React from 'react'
import Home from './Pages/Home/Home';
import {Routes , Route , BrowserRouter as Router} from "react-router-dom";
export default function App() {
  return (
    <div className=''>
     <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
      </Routes>
     </Router>
    </div>
  )
}
