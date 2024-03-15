import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const ViewUsers = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        middlename: '',
        email: '',
        password: ''
    })
    const [user, setUsers] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const fetchData = async () => {
        try {
            const res = await axios.get('http://localho`st:1337/`viewuser')
            // console.log(res.data)
            setUsers(res.data.data)
        } catch (error) {
            console.log(`Error fetching: ${error}`)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    function handleAddButton() {
        setIsOpen(true)
    }

    async function handleAdd() {
        const res = await axios.post('http://localhost:1337/adduser', values)
        if(res) {
            console.log(`Add user: ${res.data}`)
        } else {
            console.log('Error adding')
        }
        setIsOpen(false)
    }

    function handleClose() {
        setIsOpen(false)
        // window.location.reload()
    }

    function handleOnChangeFirstname(e) {
        const firstname = e.target.value
        setValues({ ...values, firstname: firstname })
    }

    function handleOnChangeLastname(e) {
        const lastname = e.target.value
        setValues({ ...values, lastname: lastname })
    }

    function handleOnChangeMiddlename(e) {
        const middlename = e.target.value
        setValues({ ...values, middlename: middlename })
    }

    function handleOnChangeEmail(e) {
        const email = e.target.value
        setValues({ ...values, email: email })
    }

    function handleOnChangePassword(e) {
        const password = e.target.value
        setValues({ ...values, password: password })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[80%] h-screen flex justify-start p-[2rem]">
                    <div className="w-full h-full flex flex-col gap-5">
                        <div className="flex justify-between">
                            <h1 className='font-semibold text-[20px]'>View Users</h1>
                            <Button onClick={handleAddButton} variant='contained'>Add User</Button>
                        </div>

                        <div className="overflow-auto w-full h-full flex flex-col gap-6">
                            <Table className='border border-solid border-black'>
                                <TableHead className='border border-solid border-black'>
                                    <TableRow>
                                        <TableCell align='center'>Firstname</TableCell>
                                        <TableCell align='center'>Lastname</TableCell>
                                        <TableCell align='center'>Middlename</TableCell>
                                        <TableCell align='center'>Email</TableCell>
                                        <TableCell align='center'></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {user.map((item) => (
                                        <TableRow key={item._id}>
                                            <TableCell align='center'>{item.firstname}</TableCell>
                                            <TableCell align='center'>{item.lastname}</TableCell>
                                            <TableCell align='center'>{item.middlename}</TableCell>
                                            <TableCell align='center'>{item.email}</TableCell>
                                            <TableCell align='center'>
                                                <Button variant="contained">EDIT</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Modal open={isOpen} onClose={handleClose}>
                                <form onSubmit={handleAdd}>
                                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-auto flex flex-col justify-between gap-4 w-[40rem] h-[40rem] bg-white p-10">
                                        <div className="flex flex-col gap-3">
                                            <TextField value={values.firstname} onChange={handleOnChangeFirstname} label="First Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.lastname} onChange={handleOnChangeLastname} label="Last Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.middlename} onChange={handleOnChangeMiddlename} label="Middle Name" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.email} onChange={handleOnChangeEmail} label="Email" id="outlined-basic" variant="outlined" />
                                            <TextField value={values.password} onChange={handleOnChangePassword} label="Password" id="outlined-basic" variant="outlined" />
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <Button variant='contained' type='submit'>Add Student</Button>
                                            <Button variant='contained' onClick={handleClose}>Close</Button>
                                        </div>
                                    </div>
                                </form>
                            </Modal>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default ViewUsers