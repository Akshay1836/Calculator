import React, { useState } from 'react'
import Button from './Button-op';
import Digit from './Digit';
import Display from './Display';

function Hero() {

  const [result,setResult]=useState('')
  const [copy,setCopy]=useState('')

  const findResult=(val)=>{
    const find=result+val;
    setResult(find);
  }


  const calculate=()=>{
   try{
    const finalResult=eval(result);
    setCopy(finalResult);
    setResult(result)
   }
   catch(error)
   {
    alert('Invalid Syntax');
    setResult('')
   }
  }

  const clear=()=>{
    setResult('')
    setCopy('')
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
      setResult('');
      setCopy(per)
    }
    catch
    {
      alert('Error');
    }
    
  }
  return (
    <div className='sm:w-2/3 sm:h-2/3 lg:w-3/12 lg:h-3/4 xl:w-1/2 xl:h-screen lg:mt-20 mt-24 mb-10 px-6 py-6 rounded-xl bg-font_black'>
       <Display result={result} copy={copy} findResult={findResult}/>
        <div className='grid grid-rows-5 grid-cols-4 w-full h-2/3 bg-font_black rounded-md pl-0'>
                <div className='bg-clr_blue w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 xl:w-32 xl:h-24 rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center ' onClick={()=>{clear()}}><p className='text-center text-font_white'>AC</p></div>
                <div className='bg-clr_blue w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 xl:w-32 xl:h-24 rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center' onClick={()=>{percentage()}}><p className='text-center text-font_white'>%</p></div>
                
                <div className='bg-clr_blue w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 xl:w-32 xl:h-24 rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center ' onClick={()=>{negative()}}><p className='text-center text-font_white'>+/-</p></div>
                
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
                
                <div className='bg-clr_blue w-16 h-16 my-2 mx-2 md:w-24 md:h-24 md:text-3xl lg:w-12 lg:h-12 xl:w-32 xl:h-24  rounded-md font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center ' onClick={()=>{back()}}><p className='text-center text-font_white'><i class="fa-solid fa-delete-left"></i></p></div>
                <div className='bg-clr_blue w-16 h-16 my-2 mx-2  md:w-24 md:h-24 md:text-3xl rounded-md lg:w-12 lg:h-12 xl:w-32 xl:h-24 font-bold text-xl font-serif p-2 cursor-pointer flex items-center justify-center ' onClick={()=>{calculate()}}><p className='text-center text-font_white'>=</p></div>
                
                

                


               
                

                


               
               

        </div>
       
    </div>
  )
}

export default Hero