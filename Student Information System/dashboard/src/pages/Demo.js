import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Demo = () => {
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: ''
    })

    const handleBrand = (e) => {
        try {
            const brand = e.target.value
            setCar({ ...car, brand: brand })

        } catch (error) {
            console.log(error)
        }
    }

    const handleModel = (e) => {
        try {
            const model = e.target.value
            setCar({ ...car, model: model })

        } catch (error) {
            console.log(error)
        }
    }

    const handleColor = (e) => {
        try {
            const color = e.target.value
            setCar({ ...car, color: color })

        } catch (error) {
            console.log(error)
        }
    }

    const handleYear = (e) => {
        try {
            const year = e.target.value
            setCar({ ...car, year: year })

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = () => {
        console.log(`
Brand: ${car.brand}
Model: ${car.model}
Color: ${car.color}
Year: ${car.year}`)
        setCar({ ...car, brand: '', model: '', color: '', year: '', })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[20%] h-screen flex flex-col justify-center items-center gap-9 p-4">
                    <TextField
                        value={car.brand}
                        onChange={handleBrand}
                        label="Brand"
                        variant="outlined" />
                    <TextField
                        value={car.model}
                        onChange={handleModel}
                        label="Model"
                        variant="outlined" />
                    <TextField
                        value={car.color}
                        onChange={handleColor}
                        label="Color"
                        variant="outlined" />
                    <TextField
                        value={car.year}
                        onChange={handleYear}
                        label="Year"
                        variant="outlined" />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                    >
                        Submit
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Demo