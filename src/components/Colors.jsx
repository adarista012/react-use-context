import React, { useContext} from 'react'
import { ColorsContext } from '../contexts/ColorContext'

function Colors() {
    const { setColor } = useContext(ColorsContext)

  return (
    <div className='containerButtons'>
      <div className='buttonColor' onClick={() => {
    setColor('peru')}}/>
      <div className='buttonColor' onClick={() => {
    setColor('burlywood')}}/>
      <div className='buttonColor' onClick={() => {
    setColor('tomato')}}/>
      <div className='buttonColor' onClick={() => {
    setColor('skyblue')}}/>
    </div>
  )
}

export default Colors
