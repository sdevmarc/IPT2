import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddStudent from './pages/AddStudent'
import Demo from './pages/Demo'
import ViewStudentsTest from './pages/ViewStudentsTest'
import ViewStudents from './pages/ViewStudents'

const App = createBrowserRouter([
    { path: '/', element: <Dashboard /> },
    { path: '/addstudent', element: <AddStudent /> },
    { path: '/demo', element: <Demo /> },
    { path: '/viewstudents', element: <ViewStudents /> },
    // { path: '/viewstudents', element: <ViewStudentsTest /> }
])

export default App