import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'
const Admission = () => {
  return (
    <div>
      <Header page = "Admission"></Header>
      <Outlet></Outlet>
    </div>
    
  )
}

export default Admission