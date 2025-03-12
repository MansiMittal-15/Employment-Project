import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Categories from './Categories'
import PromotedCompanies from './PromotedCompanies'
import Careers from './Careers'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className='box-border'>
      <Header />
      <HeroSection />
      <Categories />
      <PromotedCompanies />
      <Careers />
      <Footer />
    </div>
    </>
  )
}

export default Home
