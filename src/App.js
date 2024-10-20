import './App.css';
import Thankyoupage from './components/Thankyoupage';
import Homepage from './components/Homepage';
import Header from './components/Header';
import { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const [activeplant, setActivePlant] = useState('')

  const onChangeActivePlant = (name) => {
    setActivePlant(name)
  }


  return (
    <div className='background-container'>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Homepage changeActivePlant={onChangeActivePlant} />} />
                <Route exact path = '/thankyou' element={<Thankyoupage  activeplant={activeplant} />}/>
          </Routes>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App;
