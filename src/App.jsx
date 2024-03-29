import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Allcontent from './components/Allcontent'
import All from './components/All'
import FullStackCourseCard from './components/FullStackcourse'
import { CyberSecurityCourseCard } from './components/security'
import DataScienceCourseCard from './components/Datascience'

const App = () => {
  const router= createBrowserRouter([
    {
      path:'/',
      element:<Allcontent/>,
      children:[
        {
          index:'true',
          element:<All/>
        },
        {
          path:'fullstackdevelopment',
          element:<FullStackCourseCard/>
        },{
          path:'Security',
          element:<CyberSecurityCourseCard/>
        },
        {
          path:'Datascience',
          element:<DataScienceCourseCard/>
        }
      ]
    }

  ])
  return (<RouterProvider router={router}></RouterProvider>
    
  )
}

export default App

