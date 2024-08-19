import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const NewsCalendar = () => {
  return (
    <div>
      <Header page='News & Calendar'></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default NewsCalendar
