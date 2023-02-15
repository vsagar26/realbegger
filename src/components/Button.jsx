import React from 'react'

const Button = ({title}) => {
  return(
    <button className={`bg-[#5F259F] font-poppins font-[600] text-[16px] sm:text-medium px-6 sm:px-16 py-3 text-white`}>{title}</button>
  )
}

export default Button;