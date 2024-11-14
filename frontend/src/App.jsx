import React from 'react'
import Header from './components/Header' 
import Profile from './components/Profile'
import Market from './components/Market'
import HomeFront from './components/HomeFront'

const App = () => {
  return (
    <div className='box-border'>
      <Header /> 
      {/* <Market /> */}
      {/* <Profile /> */}
      <HomeFront />
    </div>
  )
}

export default App
