import React from 'react'
import Header from '../components/common/Header'
import { Outlet } from 'react-router-dom'


const Students = () => {
    return (
        <div>
            <Header page="Students" />

            <Outlet></Outlet>
        </div>
    )
}

export default Students