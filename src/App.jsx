import React, { useEffect, useState } from 'react'
import InputForm from './components/InputForm';
import ShowData from './components/ShowData';


export default function App() {

  const [data, setData] = useState('Change the number of sentence..');
  const [sentenceNumber, setSentenceNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    const fetchData = async () => {
      try {
        let number = await parseInt(sentenceNumber)
        const response = await fetch(`https://hipsum.co/api/?type=hipster-latin&sentences=${number}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
        console.log('loading');
      }
    };

    fetchData();
    // for testing purpose comment above and uncomment below code
    // setIsLoading(false);
    // setData('Leggings blue bottle tilde kombucha thundercats. Sed raw denim ascot, retro waistcoat skateboard big mood celiac squid heirloom thundercats health goth vape. Lo-fi marxism meh etsy, normcore et occaecat meditation chicharrones laborum ex proident brunch. Vaporware tattooed occupy proident pariatur. Deep v flannel occupy meditation VHS art party. Shaman laborum neutra live-edge DIY salvia VHS street art art party glossier air plant green juice williamsburg. Tumblr tumeric portland synth. Air plant solarpunk shabby chic consequat tousled 8-bit ennui direct trade. Gastropub dolor celiac vaporware laborum ennui sustainable taiyaki. Kogi dreamcatcher etsy aliqua migas shoreditch incididunt craft beer.');

  },[sentenceNumber]);
  return (
    <div className='border border-gray-600 w-3/4 m-auto p-2'>
      <h1 className='text-red-500 text-2xl font-bold text-center'>Simple Text Generator</h1>

      <InputForm setSentenceNumber={setSentenceNumber} setIsLoading={setIsLoading} />
      <hr />
      <ShowData data={data} isLoading={isLoading}/> 

      <br />

    </div>
  )
}
