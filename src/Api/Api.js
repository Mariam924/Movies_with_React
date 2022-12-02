import axios from "axios";
export let getTrending =async(mediaType)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3823fe8fa5ebde3d0570382945eec1ed`)
    return (data.results);

  }


  export let getDetails =async(id, mediaType)=>{
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=3823fe8fa5ebde3d0570382945eec1ed&language=en-US`)
    return (data);

  }

  