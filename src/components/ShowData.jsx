import React, { useEffect, useState } from 'react';


const ShowData = ({ data, isLoading }) => {
    const [typedData, setTypedData] = useState('');
    // const data = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod tenetur laudantium soluta ratione officiis eos. Quos possimus voluptatum commodi officia aut, culpa blanditiis tempora. Assumenda reprehenderit ipsam dignissimos repudiandae laborum.';
    useEffect(() => {
        let i = 0;
        let interval;
        setTypedData('');
        const typing = () => {
            interval = setInterval(() => {
                setTypedData((prevTypedData) => {
                    const currentChar = data[i];
                    i++;

                    return prevTypedData + (currentChar ? currentChar : ''); // Check for undefined
                });

                if (i > data.length) {
                    clearInterval(interval);
                }
            }, 50);
        };

        clearInterval(interval);
        typing();

        return () => {
            // Cleanup function to clear the interval when the component is unmounted
            clearInterval(interval);
        };
    }, [data]);

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
