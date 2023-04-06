import React,{ useContext } from 'react'
import { ColorsContext } from '../contexts/ColorContext'

function Page() {
    const { color } = useContext(ColorsContext)
  return (
    <div className='container' style={{backgroundColor:`${color}`}}>
    </div>
  )
}

export default Page
