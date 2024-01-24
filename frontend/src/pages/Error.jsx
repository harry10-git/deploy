import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div  className='flex align-center justify-center flex-col gap-10 flex-auto text-white text-4xl' style={{ textAlign: 'center', width: '100vw', height: '100vh', backgroundImage: "url('../images/bgfooter.svg')"}}>
      <div><h1 className=''>Error</h1></div> 
        <div><button className='text-white text-4xl' style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Click to go back to Home</button></div>
      </div>
    </>
  )
}

export default Error