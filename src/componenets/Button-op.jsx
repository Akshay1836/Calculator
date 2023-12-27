import React from 'react'

function Button({findResult,result,setResult,calculate,btn_value}) {
  return (
        <div className='bg-clr_blue w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center ' onClick={()=>{findResult(`${btn_value}`)}}><p className='text-center text-font_white'>{btn_value==='*'? 'x':btn_value}</p></div>
  )
}

export default Button