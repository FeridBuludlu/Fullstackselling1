import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Helmet from "react-helmet"
import "./Detail.css"
function Detail() {
const {id} =useParams();
const [data,setData]=useState();

useEffect(()=>{
  axios.get(`http://localhost:8080/product/${id}`)
  .then(res=>{
    setData(res.data);
  })
},[])
  return (
    <div className='details'>
      <Helmet>
        <title>Detail</title>
      </Helmet>

    {
      data && (
        <div>
        <h1>{data.title}</h1>
        <img src={data.image} alt="" /></div>
      )
    }
  </div>
  )
}

export default Detail