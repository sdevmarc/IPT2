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
import TextField from '@mui/material/TextField';

function ViewStudents() {
    const [students, setStudents] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [values, setValues] = useState({
        id: '',
        lastname: '',
        firstname: '',
        middlename: '',
        course: '',
        year: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:1337/viewstudents`)
            .then((response) => {
                setStudents(response.data)
            })
            .catch((error) => {
                console.error("Error fetching student data", error)
            })
    }, [])

    function handleOnClickEditStudent(student) {
        setValues({
            ...values,
            id: student.id,
            lastname: student.lastname,
            firstname: student.firstname,
            middlename: student.middlename,
            course: student.course,
            year: student.year
        })
        setIsOpen(true)
    }
    function handleEdit() {
        axios.post('http://localhost:1337/editstudent', values)
            .then(() => {
                alert('Edit Successful!')
                setValues({ ...values, id: '', lastname: '', firstname: '', middlename: '', course: '', year: '' })
                setIsOpen(false)
                window.location.reload()
            }
            )
            .catch(err => console.log(`Error: ${err}`))
    }

    function handleClose() {
        setIsOpen(false)
    }

    function handleOnChangeId(e) {
        const id = e.target.value
        setValues({ ...values, id: id })
    }

    function handleOnChangeLastname(e) {
        const lastname = e.target.value
        setValues({ ...values, lastname: lastname })
    }
    function handleOnChangeFirstname(e) {
        const firstname = e.target.value
        setValues({ ...values, firstname: firstname })
    }
    function handleOnChangeMiddlename(e) {
        const middlename = e.target.value
        setValues({ ...values, middlename: middlename })
    }
    function handleOnChangeCourse(e) {
        const course = e.target.value
        setValues({ ...values, course: course })
    }
    function handleOnChangeYear(e) {
        const year = e.target.value
        setValues({ ...values, year: year })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[80%] h-screen flex flex-col p-5">
                    <div className="w-full h-full flex flex-col gap-5">
                    <h1 className='font-semibold text-[20px]'>View Students</h1>
                        <div className="overflow-auto w-full h-full flex flex-col gap-6">
                           
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
                                                <Button variant="contained" onClick={() => handleOnClickEditStudent(student)}>EDIT</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Modal open={isOpen} onClose={handleEdit}>
                                <form onSubmit={handleEdit}>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-auto flex flex-col justify-between gap-4 w-[40rem] h-[40rem] bg-white p-10">
                                        <div className="flex flex-col gap-3">
                                            <TextField value={values.id} onChange={handleOnChangeId} label="ID Number" id="outlined-basic" variant="outlined" disabled />
                                            <TextField value={values.lastname} onChange={handleOnChangeLastname} label="Last Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.firstname} onChange={handleOnChangeFirstname} label="First Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.middlename} onChange={handleOnChangeMiddlename} label="Middle Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.course} onChange={handleOnChangeCourse} label="Course" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.year} onChange={handleOnChangeYear} label="Year" id="outlined-basic" variant="outlined" />
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <Button variant='contained' type='submit'>Edit</Button>
                                            <Button variant='contained' onClick={handleClose}>Close</Button>
                                        </div>

                                    </div>
                                </form>
                            </Modal>

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default ViewStudents
