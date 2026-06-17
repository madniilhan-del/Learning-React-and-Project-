import React from 'react'
/*  we are understanding the Concept of Props Driling */
/*Props are read-only objects used to pass data from a parent component to a child component.*/ 

const Card = (props) => {

  console.log(props) /// props will come in the form of Objects 
  return (
    <>
     
      
      <div className="card">
        <img className='img' src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='btn'>View Profile</button>

      </div>

      

    </>
  )
}

export default Card