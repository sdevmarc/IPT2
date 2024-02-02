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

    const handleAddStudent = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:1337/addstudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })

            const result = await response.json()
            console.log(result)

            if (result.success) {
                setValues({ ...values, id: '', firstname: '', lastname: '', middlename: '', course: '', year: '' })
                alert(result.message)
            } else {
                alert('Failed to add student. Please try again')
            }
        } catch (error) {
            console.error('Error adding studentL ', error)
            console.log(`Error: ${error}`)
        }
    }




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

//     const handleSubmit = (e) => {
//         try {
//             e.preventDefault()
//             if (
//                 values.id === '' ||
//                 values.firstname === '' ||
//                 values.lastname === '' ||
//                 values.middlename === '' ||
//                 values.course === '' ||
//                 values.year === '') {
//             } else {
//                 console.log(`
// ID Number: ${values.id}
// Firstname: ${values.firstname}
// Lastname: ${values.lastname}
// Middlename: ${values.middlename}
// Course: ${values.course}
// Year: ${values.year}
//         `)
//                 // setValues({ ...values, id: '', firstname: '', lastname: '', middlename: '', course: '', year: '' })
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <form
                    className="h-full flex flex-col justify-center p-4 gap-4"
                    onSubmit={handleAddStudent}
                >
                    <h1 className='font-semibold  text-[20px]'>ADD STUDENT</h1>
                    <TextField

                        inputMode='numeric'
                        value={values.id}
                        onChange={handleInputId}
                        id="outlined-basic"
                        label="ID Number"
                        variant="outlined"
                        required />
                    <TextField
                        value={values.firstname}
                        onChange={handleInputFirstname}
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        required />
                    <TextField
                        value={values.lastname}
                        onChange={handleInputLastname}
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        required />
                    <TextField
                        value={values.middlename}
                        onChange={handleInputMiddlename}
                        id="outlined-basic"
                        label="Middle Name"
                        variant="outlined"
                        required />
                    <TextField
                        value={values.course}
                        onChange={handleInputCourse}
                        id="outlined-basic"
                        label="Course"
                        variant="outlined"
                        required />
                    <TextField
                        value={values.year}
                        onChange={handleInputYear}
                        id="outlined-basic"
                        label="Year"
                        variant="outlined"
                        required />
                    <Button
                        type='submit'
                        variant="contained"
                    >
                        ADD STUDENT
                    </Button>
                </form>

            </div>
        </>
    )
}

export default AddStudent