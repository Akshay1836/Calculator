import React from 'react'

function Digit({findResult,result,setResult,calculate,btn_value}) {
  return (
    <div>
      <div className='bg-btn_color opacity-100  my-2 mx-4 rounded-md  w-12 h-12  font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{findResult(`${btn_value}`)}}><p className='text-center text-font_white'>{btn_value}</p></div>
    </div>
  )
}

export default Digit