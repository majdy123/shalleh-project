import React, { Component } from 'react'
import './Admin.css'
import { useParams } from 'react-router-dom'

export default function Admin(){
  const {id} = useParams()
  return (
    <div>Shalleh Profile Number {id}</div>
  )
}
