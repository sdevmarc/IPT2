import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ViewStudents = () => {
    const [students, setStudents] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [student, setstudent] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:1337/viewstudents`)
            .then((response) => {
                setStudents(response.data)
            })
            .catch((error) => {
                console.error("Error fetching student data", error)
            })
    }, [])

    function handleEditStudent(student) {
        setstudent(student)
        setIsOpen(true)
    }

    const handleClose = () => {
        setstudent(null)
        setIsOpen(false)
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[80%] h-screen flex flex-col p-5">
                    <div className="w-full h-full flex flex-col gap-5">
                        <div className="w-full h-[20rem] flex flex-col gap-6">
                            <h1 className='font-semibold text-[20px]'>View Students</h1>
                            <Table className='border border-solid border-black'>
                                <TableHead className='border border-solid border-black'>
                                    <TableRow>
                                        <TableCell align='center'>ID</TableCell>
                                        <TableCell align='center'>Firstname</TableCell>
                                        <TableCell align='center'>Lastname</TableCell>
                                        <TableCell align='center'>Middlename</TableCell>
                                        <TableCell align='center'>Course</TableCell>
                                        <TableCell align='center'>Year</TableCell>
                                        <TableCell align='center'></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {students.map((student) => (
                                        <TableRow key={student.id}>
                                            <TableCell align='center'>{student.id}</TableCell>
                                            <TableCell align='center'>{student.firstname}</TableCell>
                                            <TableCell align='center'>{student.lastname}</TableCell>
                                            <TableCell align='center'>{student.middlename}</TableCell>
                                            <TableCell align='center'>{student.course}</TableCell>
                                            <TableCell align='center'>{student.year}</TableCell>
                                            <TableCell align='center'>
                                                <Button variant="contained" onClick={() => handleEditStudent(student)}>EDIT</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                                <Modal open={isOpen} onClose={handleClose}>
                                    <Box
                                        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4 }}>
                                        <h2 className='text-[25px] mb-5'>ID NUMBER: <span className='font-bold'>{student ? `${student.id}` : null}</span></h2>
                                        <h2>LAST NAME: <span className='font-bold'>{student && `${student.lastname}`}</span></h2>
                                        <h2>FIRST NAME: <span className='font-bold'>{student && `${student.firstname}`}</span></h2>
                                        <h2>MIDDLE NAME: <span className='font-bold'>{student && `${student.middlename}`}</span></h2>
                                        <h2>COURSE: <span className='font-bold'>{student && `${student.course}`}</span></h2>
                                        <h2 className='mb-5'>YEAR: <span className='font-bold'>{student && `${student.year}`}</span></h2>
                                        <Button variant='contained' onClick={handleClose}>Close</Button>
                                    </Box>
                                </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewStudents
