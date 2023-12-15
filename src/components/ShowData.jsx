import React, { useEffect, useState } from 'react'

export default function ShowData({data, isLoading}) {

    const [typedData, setTypedData] = useState('');

    useEffect(()=>{
        let i=0;
        let interval;
        setTypedData('');
        function typing(){
            interval = setInterval(()=>{
                setTypedData((prevTypedData) => {
                    const currentChar = data[i];
                    i++;
          
                    return prevTypedData + (currentChar ? currentChar : ''); // Check for undefined
                  });
                // i++;
                console.log(typedData);
                console.log('woring interval')
                if(i>data.length){
                    clearInterval(interval);
                }
            },50);
        }
        
        clearInterval(interval);
        typing();
        return () => {
            // Cleanup function to clear the interval when the component is unmounted
            clearInterval(interval);
          };
        
    },[data]);

    
  return isLoading? <h1>Loading...</h1> : (
    <div className='mt-3 text-justify'>
        <p className='font-bold'>Generated Sentences : </p> 
        
        <p>
            {typedData}
        </p>

    </div>
  )
}




// import React from 'react'

// export default function ShowData({data, isLoading}) {



//   return isLoading? <h1>Loading...</h1> : (
//     <div className='mt-3 text-justify'>
//         <p className='font-bold'>Generated Sentences : </p> 
//         <p>
//             {data}
//         </p>
      
//     </div>
//   )
// }
