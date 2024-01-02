import React from 'react'

function Digit({findResult,result,setResult,calculate,btn_value}) {
  return (
    <div>
      <div className='bg-btn_color opacity-100 w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 xl:w-32 xl:h-24 rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{findResult(`${btn_value}`)}}><p className='text-center text-font_white'>{btn_value}</p></div>
    </div>
  )
}

export default Digit