import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import News from './Components/News'
// import NewsItem from './Components/NewsItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            

            <Route path='/technology'  element={<News pageSize={9} country="us" category="technology" />} />
            <Route path='/business'        element={<News pageSize={9} country="us" category="business" />} />
            <Route path='/entertainment'  element={<News pageSize={9} country="us" category="entertainment" />} />
            <Route path='/'        element={<News pageSize={9} country="us" category="general" />} />
            <Route path='/health'           element={<News pageSize={9} country="us" category="health" />} />
            <Route path='/science'        element={<News pageSize={9} country="us" category="science" />} />
            <Route path='/sports'        element={<News pageSize={9} country="us" category="sports" />} />
            {/* <Route path='/' element={<Navbar />}/> */}





          </Routes>
        </BrowserRouter>


        <div>Monkey App
          {/* <Navbar />
          <News pageSize={3}   country="us"  category="technology"/>
          <NewsItem /> */}
        </div>


      </div>

    )
  }
}
