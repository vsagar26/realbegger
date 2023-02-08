import React from 'react'

const Button = ({title}) => {
  return(
    <button className={`bg-[#A66EFF] font-poppins font-[600] text-medium px-8 sm:px-16 py-3 text-white`}>{title}</button>
  )
}

export default Button;