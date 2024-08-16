import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const StudentLIfe = () => {
  return (

    <div>

      <Header page="Student Life"/>

      <Outlet></Outlet>

    </div>
  )
}

export default StudentLIfe