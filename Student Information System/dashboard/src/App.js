import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddStudent from './pages/AddStudent'
import Demo from './pages/Demo'
import ViewStudents from './pages/ViewStudents'
import ViewUsers from './pages/ViewUsers'

const App = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/addstudent', element: <AddStudent /> },
    { path: '/demo', element: <Demo /> },
    { path: '/viewstudents', element: <ViewStudents /> },
    { path: '/viewusers', element: <ViewUsers /> }
])

export default App