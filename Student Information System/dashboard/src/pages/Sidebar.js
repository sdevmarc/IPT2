import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const Sidebar = () => {
    const values =
        [
            { id: 1, link: '/', icon: <HomeIcon />, name: "Home" },
            { id: 2, link: '/addstudent', icon:  <InfoIcon />, name: "Add Student" },
            { id: 2, link: '/demo', icon: <InfoIcon />, name: "Demo" }
        ]
    return (
        <>
            <div className="w-[20%] h-screen bg-[#222] flex flex-col justify-center items-start p-4 gap-9">
                {values.map((item, i) => (
                    <Link
                        key={i}
                        to={item.link}
                        className='w-full text-white font-semibold flex items-center gap-5'
                    >
                        {item.icon}{item.name}
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Sidebar