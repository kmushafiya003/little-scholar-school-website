import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Header page="About us"/>
      <Outlet></Outlet>

    </div>
  )
}

export default About