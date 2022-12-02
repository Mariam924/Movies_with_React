import React, { useEffect, useState } from 'react'
import { getTrending } from '../../Api/Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Movies() {

  
  const [Movies, setMovies ] = useState([])
  const [Tv, setTv ] = useState([])

  async function getData(){
    let movies = await getTrending('movie');
    setMovies(movies);

    let tv = await getTrending('movie');
    setTv(tv);
  }
  useEffect(()=>{
    getData();
  }, [])
  return (
    <>{Movies.length>0? <> <div className="container">
    <div className="row">
      <div className="col-md-4 d-flex align-items-center movie">
        <div className="">
          <div className="brdr w-25"></div>
          <h2>Trending <br/>Movies <br/> to watch now</h2>
          <br />
          <p>most watched movies by days</p>
          <div className="brdr w-100"></div>
        </div>
      </div>
      {Movies.map((value, index) => <Item key={index} data = {value}/>)}
    </div>
  </div></>: <Loading/>}</>
  )
}
