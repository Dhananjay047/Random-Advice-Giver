import React,{ useState, useEffect } from 'react'
import axios from "axios"

import './App.css'


const App = () => {

    const [Advice, setAdvice ] =  useState("Advice")
    

    const fetchAdvice = async () => {
      // var result = await axios.get('https://api.adviceslip.com/advice')
      // setAdvice(result)
      // console.log(result.data.slip.advice)
    }

    const getAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const { advice } =  response.data.slip
          if(advice !== Advice ){
            setAdvice(advice)
          } else{
            getAdvice()
          }
          //console.log(advice)
        }).catch((err)=>{
          console.log(err)
        })
    }

    useEffect(() => {
      getAdvice()
    },[])
    

  return (
    <div className="app">
        <div className="card">
          <h1 className="heading">{Advice}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
    </div>
  )
}

export default App