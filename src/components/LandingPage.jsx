import React from 'react'
import Navbar from './ChildComps.jsx/Navbar'
import TopSect from './ChildComps.jsx/TopSect'
import Mission from './ChildComps.jsx/Mission'
import Categories from './ChildComps.jsx/Categories'
import Footer from './ChildComps.jsx/Footer'

function LandingPage() {
  return (
    <main  >


        <Navbar />
        <TopSect />
        <Mission/>
        <Categories/>
        <Footer/>


    </main>
  )
}

export default LandingPage
