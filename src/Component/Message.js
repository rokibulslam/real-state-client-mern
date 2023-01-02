import React from 'react'

const Message = ({message, color}) => {
  return (
      <div className='d-flex justify-content-center align-items-center '><h1 className={`text-${color}`}>{message}</h1></div>
  )
}

export default Message