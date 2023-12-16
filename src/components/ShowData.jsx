import React, { useEffect, useState } from 'react';


const ShowData = ({ data, isLoading }) => {
    const [typedData, setTypedData] = useState('');
    // const data = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur laudantium soluta ratione officiis eos. Quos possimus voluptatum commodi officia aut, culpa blanditiis tempora. Assumenda reprehenderit ipsam dignissimos repudiandae laborum.';
   
    return (
        <div className='mt-3 text-justify'>
            <p className='font-bold'>Generated Sentences : </p>
            {isLoading ? 
            <h1>Loading...</h1> :
            <div>
                {data}
            </div>}
        </div>
    );
};

export default ShowData;
