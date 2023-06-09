import React, { useEffect ,useState} from 'react'
import './C.css';

const Covid = () => {
    const [data,setData]=useState([]);
    
    const getData= async()=>{
        try{
            const res = await fetch('https://data.covid19india.org/data.json');
           const acutualDATA =await res.json();
        //    console.log(acutualDATA.statewise[0]);
           setData(acutualDATA.statewise[0])
        }catch (err){
            console.log(err);
            
        }
       
    }
    useEffect(() => {
      
    
      getData();
    },[])
    
  return (
    <>
    <section>
    <h1>LIVE TRAKER</h1>
    <h2>TRAKER</h2>
    

    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      
    </div>
    <div class="flip-card-back">
      
      <p><span>Our</span>Country</p>
      <h1>INDIA</h1>
      
    </div>
  </div>
</div>






<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      
    </div>
    <div class="flip-card-back">
      
      <p><span>TOTAL</span><br/>RECOVERED</p>
      <h1>{data.recovered}</h1>
      
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      
    </div>
    <div class="flip-card-back">
      
      <p><span>TOTAL</span><br/>Active</p>
      <h1>{data.active}</h1>
      
    </div>
  </div>
</div>
</section>

    
    
    
     </>
  )
}

export default Covid