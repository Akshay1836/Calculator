import React, { useState } from 'react'
import Button from './Button-op';
import Digit from './Digit';

function Hero() {

  const [result,setResult]=useState('')

  const findResult=(val)=>{
    const find=result+val;
    setResult(find);
  }


  const calculate=()=>{
   try{
    const finalResult=eval(result);
    setResult(finalResult)
   }
   catch(error)
   {
    alert('error occured');
    setResult('')
   }
  }

  const clear=()=>{
    setResult('')
  }

  const negative=()=>{
    const opposite=-(result)
    setResult(opposite)
  }

  const back=()=>{
    const l=result.length;
    const val=result.slice(0,l-1);
    setResult(val)
    
  }

  const percentage=()=>{
    try
    {
      const per=result/100;
      setResult(per);
    }
    catch
    {
      alert('Error');
    }
    
  }
  return (
    <div className='w-3/12 h-screen mt-0  p-2 mb-0 bg-font_black '>
        <div className='w-full h-1/4 rounded-md my-2 p-2 border-solid border-white border-2'>
          <div className='w-full h-full rounded-xl flex justify-end items-end text-xl font-bold text-font_white pb-4 '>
            <div>
              
            </div>
           {
            result
           }
          </div>

        </div>
        <div className='grid grid-rows-5 grid-cols-4 w-full h-2/3 bg-font_black rounded-md'>
                <div className='bg-clr_blue  my-2 mx-4 rounded-md  w-12 h-12 font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{clear()}}><p className='text-center text-font_white'>AC</p></div>
                <div className='bg-clr_blue  my-2 mx-4 rounded-md  w-12 h-12 font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{percentage()}}><p className='text-center text-font_white'>%</p></div>
                
                <div className='bg-clr_blue  my-2 mx-4 rounded-md  w-12 h-12 font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{negative()}}><p className='text-center text-font_white'>+/-</p></div>
                
                <Button findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'/'}/>


                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'7'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'8'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'9'}/>
                <Button findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'*'}>x</Button>
                

                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'4'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'5'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'6'}/>
                <Button findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'+'}/>

                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'1'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'2'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'3'}/>
                <Button findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'-'}/>


                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'.'}/>
                <Digit findResult={findResult} result={result} setResult={setResult} calculate={calculate} btn_value={'0'}/>
                
                <div className='bg-clr_blue  my-2 mx-4 rounded-md w-12 h-12 font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{back()}}><p className='text-center text-font_white'><i class="fa-solid fa-delete-left"></i></p></div>
                <div className='bg-clr_blue  my-2 mx-4 rounded-md w-12 h-12  font-bold text-2xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{calculate()}}><p className='text-center text-font_white'>=</p></div>
                

                


               
                

                


               
               

        </div>
       
    </div>
  )
}

export default Hero