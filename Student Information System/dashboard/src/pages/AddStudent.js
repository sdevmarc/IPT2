import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';

const AddStudent = () => {
    const [values, setValues] = useState({
        id: '',
        firstname: '',
        lastname: '',
        middlename: '',
        course: '',
        year: ''
    })

    const handleInputId = (e) => {
        try {
            const id = e.target.value
            setValues({ ...values, id: id })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputFirstname = (e) => {
        try {
            const firstname = e.target.value
            setValues({ ...values, firstname: firstname })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputLastname = (e) => {
        try {
            const lastname = e.target.value
            setValues({ ...values, lastname: lastname })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputMiddlename = (e) => {
        try {
            const middlename = e.target.value
            setValues({ ...values, middlename: middlename })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputCourse = (e) => {
        try {
            const course = e.target.value
            setValues({ ...values, course: course })
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputYear = (e) => {
        try {
            const year = e.target.value
            setValues({ ...values, year: year })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = () => {
        try {
            if (
                values.id === '',
                values.firstname === '',
                values.lastname === '',
                values.middlename === '',
                values.course === '',
                values.year === '') {
                alert('Please fill in the empty fields')
            } else {
                console.log(`
ID Number: ${values.id}
Firstname: ${values.firstname}
Lastname: ${values.lastname}
Middlename: ${values.middlename}
Course: ${values.course}
Year: ${values.year}
        `)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <div className="h-full flex flex-col justify-center p-4 gap-4">
                    <h1 className='font-semibold  text-[20px]'>ADD STUDENT</h1>
                    <TextField
                        name='id'
                        onChange={handleInputId}
                        id="outlined-basic"
                        label="ID Number"
                        variant="outlined"
                        required />
                    <TextField
                        onChange={handleInputFirstname}
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        required />
                    <TextField
                        onChange={handleInputLastname}
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined" />
                    <TextField
                        onChange={handleInputMiddlename}
                        id="outlined-basic"
                        label="Middle Name"
                        variant="outlined"
                        required />
                    <TextField
                        onChange={handleInputCourse}
                        id="outlined-basic"
                        label="Course"
                        variant="outlined"
                        required />
                    <TextField
                        onChange={handleInputYear}
                        id="outlined-basic"
                        label="Year"
                        variant="outlined" />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                    >
                        ADD STUDENT
                    </Button>
                </div>

            </div>
        </>
    )
}

export default AddStudent