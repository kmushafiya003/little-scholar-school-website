import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'

const MandatoryDisclosure = () => {
  return (
    <div>
        <Header page="Mandatory Disclosure"/>

        <Outlet></Outlet>
    </div>
  )
}

export default MandatoryDisclosure