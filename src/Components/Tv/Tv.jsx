import React, { useEffect, useState } from 'react'
import { getTrending } from '../../Api/Api';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

export default function Tv() {


  const [Tv, setTv ] = useState([])

  async function getData(){

    let tv = await getTrending('tv');
    setTv(tv);
  }
  useEffect(()=>{
    getData();
  }, [])
  return (


    <> {Tv.length>0? <div className="container">
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
  </div>: <Loading/>}</>
  )
}
