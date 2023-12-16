import React, { useState } from 'react'

export default function InputForm({setSentenceNumber, setIsLoading}) {

    const [number, setNumber] = useState();

    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log('submit button clicked.');
        setIsLoading(true);
        setSentenceNumber(number);
        // setNumber('');
        
    }
  return (
    <div className='my-5'>

        <form onSubmit={handleSubmit} className='flex justify-between'>


            <div>

                <label htmlFor="sentenceNumber"
                className=''>Enter the number of sentences: </label>
                <input type="number" name="" id="sentenceNumber" 
                // disabled={setIsLoading?true:false}
                value={number}
                onChange={(e)=>{setNumber(e.target.value)}}
                className='border border-gray-600 rounded px-2'/>

            </div>
            <div>

                <button onClick={handleSubmit}
                className='border border-gray-600 px-5 bg-gray-600 text-white rounded'
                >Submit</button>
            </div>

        </form>
      
    </div>
  )
}
