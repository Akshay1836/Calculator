import React from 'react'

function Button({findResult,result,setResult,calculate,btn_value}) {
  return (
        <div className='bg-clr_blue  my-2 mx-4 rounded-md w-12 h-12 font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{findResult(`${btn_value}`)}}><p className='text-center text-font_white'>{btn_value==='*'? 'x':btn_value}</p></div>
  )
}

export default Button