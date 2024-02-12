import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import { DataGrid } from '@mui/x-data-grid';


const ViewStudentsTest = () => {
    const [students, setStudents] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstname', headerName: 'First Name', width: 130 },
        { field: 'lastname', headerName: 'Last name', width: 130 },
        { field: 'middlename', headerName: 'Middle name', width: 130 },
        { field: 'course', headerName: 'Course', width: 130 },
        { field: 'year', headerName: 'Year', width: 130 }
    ];
    useEffect(() => {
        axios.get(`http://localhost:1337/viewstudents`)
            .then((response) => {
                // console.log(response.data[0])
                setStudents(response.data)
            })
            .catch((error) => {
                console.error("Error fetching student data", error)
            })
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[80%] h-screen flex flex-col p-5">
                    <div className="w-full h-full flex flex-col gap-5">
                        <div className="w-full h-full flex flex-col gap-6">
                            <h1
                                className='font-semibold text-[20px]'
                            >View Students</h1>
    
                                <DataGrid
                                    rows={students}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 10 },
                                        },
                                    }}
                                    pageSizeOptions={[10, 15]}
                                    checkboxSelection
                                />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ViewStudentsTest