import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item'
import { getTrending } from '../../Api/Api'
import { getDefaultNormalizer } from '@testing-library/react'
import Loading from '../Loading/Loading'
import { Offline, Online } from "react-detect-offline";
import Disconnected from '../Disconnected/Disconnected'
export default function Home() {

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
  /* console.log( Movies); */
  return (
  <>
  <Offline><Disconnected/></Offline>
    {Movies.length>0? <><div className="container">
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
      {
        Movies.map((value, index) => <Item key={index} data = {value}/>)
      }
    </div>
  </div>



  <div className="container">
    <div className="row">
      <div className="col-md-4 d-flex align-items-center movie">
        <div className="">
          <div className="brdr w-25"></div>
          <h2>Trending <br/>Tv <br/> to watch now</h2>
          <br />
          <p>most watched tv by days</p>
          <div className="brdr w-100"></div>
        </div>
      </div>
      {
        Tv.map((value, index) => <Item key={index} data = {value}/>)
      }
    </div>
  </div>
  </> :<Loading/>}
  </>
  )
}
