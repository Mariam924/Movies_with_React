import React from 'react'
import {Link} from 'react-router-dom'

export default function Item(props) {
   let {title, poster_path, overview, vote_average, id, media_type}=props.data
  return (
    <>
    <div className="col-md-2">
      <div className="">
      <div className="item position-relative overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} className="w-100" alt="" />
        
        <Link to={`/details/${id}/${media_type}`}>
        <div className="overlay d-flex text-center align-items-center">
          <p>{overview.split(' ').slice(0,10).join(' ')}</p>
        </div> 
        </Link>
        <div className="vote p-2 ">{vote_average.toFixed(1)}</div>
      </div>
      <div>
      <h6 className='my-3'>{title}</h6>
      </div>
      </div>
    </div>
    </>
  )
}
