// import { callActionApi } from 'admin-bro';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Navbar 
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import Cart from './Cart';
// import SignIn from './SignIn.js';
// import SignUp from './SignUp.js';
import AddItem from './AddItem';




function App() {

  const [items, setItems] = useState([])


  //  This is to connect our front end to the express server.
  useEffect(() => {
    getData()
  }, [])

  

  async function getData() {
    await fetch('http://localhost:9000/items', {
      mode: 'cors'
    })
      .then(res => {
        return res.json()
      })
      .then(data => {

        console.log(data)
        
      })
      .catch(err => {

        console.log(err)
      })


  }

  // async function getData() {
  //   await fetch('http://localhost:9000/main/login', {
  //     mode: 'cors'
  //   })
  //     .then(res => {
  //       return res.text()
  //     })
  //     .then(data => {

  //       console.log(data)
        
  //     })
  //     .catch(err => {

  //       console.log(err)
  //     })


  // }



  return (
    <Router>
      <div className="App" id="outer-container">

        <Navbar />
        <AddItem  />



        <div className="content" id="page-wrap">

          <Routes>
            <Route index element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/Search" element={<Search />} />
          </Routes>

          <Routes>
            <Route path="/Cart" element={<Cart />} />
          </Routes>


        </div>


      </div>
    </Router>
  )
}

export default App;
