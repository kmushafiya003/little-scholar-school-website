import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Welcome from '../components/home/Welcome'
import Message from '../components/home/Message'
import Counts from '../components/home/Counts'
import IconSection from '../components/home/IconSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Welcome/>
        <Message/>
        <Counts/>
        <IconSection/>

    </div>
  )
}

export default Home