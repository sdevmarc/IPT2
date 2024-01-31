import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TextField from '@mui/material/TextField';

const Demo = () => {
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: ''
    })

    // const handleSetCar = (e) => {
    //     const { brand, model, color, year } = e.target.value
    //     setCar({ ...car, brand: brand, model: model, color: color, year: year })
    // }

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
        console.log(`Brand: ${car.brand}`)
        console.log(`Model: ${car.model}`)
        console.log(`Color: ${car.color}`)
        console.log(`Year: ${car.year}`)
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-[20%] h-screen flex flex-col justify-center items-center p-4">
                    <TextField
                        onChange={handleBrand}
                        label="Brand"
                        variant="outlined" />
                    <TextField
                        onChange={handleModel}
                        label="Model"
                        variant="outlined" />
                    <TextField
                        onChange={handleColor}
                        label="Color"
                        variant="outlined" />
                    <TextField
                        onChange={handleYear}
                        label="Year"
                        variant="outlined" />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Demo