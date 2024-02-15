import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="h-screen flex p-4">
                    <h1 className='font-bold text-[23px] text-[#222]'>Welcome to Saint Mary's University</h1>
                </div>
            </div>


        </>

    )
}

export default Dashboard