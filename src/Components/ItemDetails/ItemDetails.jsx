import React, { useEffect, useState } from 'react'
import { getDetails } from '../../Api/Api';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
    let x = useParams();
    console.log("xxx" + x.id);

    const [Details, setDetails ] = useState('')
  
    async function getData(){
      let details = await getDetails(x.id, x.media);
      setDetails(details);
  
    }
    useEffect(()=>{
      getData();
    }, [])
  return (
    <>
       {Details? <>
        <div className="container">
        <div className="row">
            <div className="col-md-5">
                <img src={`https://image.tmdb.org/t/p/w500${Details.poster_path}`} className= "w-100" alt="" />
            </div>
            <div className='col-md-7 list'>
                <h2>{Details.title} {Details.name}</h2>
                 {Details.genres.map((value, index)=> <span className='badge bg-info p-2 mx-2' key={index}> {value.name}</span>)} 

                 <ul>
                <li>Vote: {Details.vote_average}</li>
                <li>Vote Count: {Details.vote_count}</li>
                <li>Popularity: {Details.popularity}</li>
                <li>Release Date: {Details.release_date}</li>
                
               
                
            </ul>
            <p>{Details.overview}</p>
            </div>
           
            
        </div>
    </div>
       </> : <Loading/>}
    </>
  )
}
