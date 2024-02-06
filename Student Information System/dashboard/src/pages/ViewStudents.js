import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const ViewStudents = () => {
    const [students, setStudents] = useState([])


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
                        <div className="w-full h-[20rem] flex flex-col gap-6">
                        <h1
                            className='font-semibold text-[20px]'
                        >View Students</h1>
                            <Table
                                className='border border-solid border-black '
                            >
                                <TableHead
                                    className='border border-solid border-black '
                                >
                                    <TableRow>
                                        <TableCell align='center'>ID</TableCell>
                                        <TableCell align='center'>Firstname</TableCell>
                                        <TableCell align='center'>Lastname</TableCell>
                                        <TableCell align='center'>Middlename</TableCell>
                                        <TableCell align='center'>Course</TableCell>
                                        <TableCell align='center'>Year</TableCell>
                                    </TableRow>
                                </TableHead>
                                {students.map((student) => (
                                    <TableBody
                                        key={student.id}
                                        className='border border-solid border-black'
                                    >
                                        <TableRow>
                                            <TableCell align='center'>{student.id}</TableCell>
                                            <TableCell align='center'>{student.firstname}</TableCell>
                                            <TableCell align='center'>{student.lastname}</TableCell>
                                            <TableCell align='center'>{student.middlename}</TableCell>
                                            <TableCell align='center'>{student.course}</TableCell>
                                            <TableCell align='center'>{student.year}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                ))}
                            </Table>


                        </div>

                    </div>
                    {/* <ul>
                        {students.map((student) => (
                            <li
                                className=''
                                key={student.id}
                            >
                                {student.firstname}
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div >
        </>
    )
}

export default ViewStudents