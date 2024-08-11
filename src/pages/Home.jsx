import React from 'react'


import HeroSection from '../components/home/HeroSection'
import Welcome from '../components/home/Welcome'
import Message from '../components/home/Message'
import Gallery from '../components/home/Gallery'
import Counts from '../components/home/Counts'
import IconSection from '../components/home/IconSection'

import Infrastructure from '../components/home/infrastructure'
import Faculty from '../components/home/faculty'

const Home = () => {
  return (


    <div >


      <HeroSection />
      <Welcome />
      <Message />
      <Infrastructure />
      <Faculty />
      <Gallery />
      <Counts />
      <IconSection />


    </div>
  )
}

export default Home