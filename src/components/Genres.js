import React from 'react';
import Chip from '@mui/material/Chip';
import { useEffect } from 'react';


const allGenres = [
  {
    id:0,
    name:"All",
    setActiveGenre:'all',
  
  },
  {
    id:1,
    name:"Action",
    setActiveGenre:'Action'
  },
  {
    id:2,
    name:"Adventure",
    setActiveGenre:'Adventure'
  },
  {
    id:3,
    name:"Animation",
    setActiveGenre:"Animation"
  },
  {
    id:4,
    name:"Biography",
    setActiveGenre:"Biography"
  },
  {
    id:5,
    name:"Comedy",
    setActiveGenre:"Comedy"
  },
  {
    id:6,
    name:"Crime",
    setActiveGenre:"Crime"
  },
  {
    id:7,
    name:"Documentary",
    setActiveGenre:"Documentary"
  },
  {
    id:8,
    name:"Drama",
    setActiveGenre:"Drama"
  },
  {
    id:9,
    name:"Family",
    setActiveGenre:"9"
  },
  {
    id:10,
    name:"Film Noir",
    setActiveGenre:"Film Noir"
  },
  {
    id:11,
    name:"History",
    setActiveGenre:"History"
  },
  {
    id:12,
    name:"Horror",
    setActiveGenre:"Horror"
  },
  {
    id:13,
    name:"Music",
    setActiveGenre:"Music"
  },
  {
    id:14,
    name:"Musical",
    setActiveGenre:"Musical"
  },
  {
    id:15,
    name:"Mystery",
    setActiveGenre:"Mystery"
  },
  {
    id:16,
    name:"Romance",
    setActiveGenre:"Romance"
  },
  {
    id:17,
    name:"Sci-Fi",
    setActiveGenre:"Sci-Fi"
  },
  {
    id:18,
    name:"Short Film",
    setActiveGenre:"Short Film"
  },
  {
    id:19,
    name:"Sport",
    setActiveGenre:"Sport"
  },
  {
    id:20,
    name:"Superhero",
    setActiveGenre:"Superhero"
  },
  {
    id:21,
    name:"Thriller",
    setActiveGenre:"Thriller"
  },
  {
    id:22,
    name:"War",
    setActiveGenre:"War"
  },
  {
    id:23,
    name:"Western",
    setActiveGenre:"Western"
  }
]

const Genres = ({setActiveGenre, activeGenre,setFiltered,movies}) => {
useEffect (()=>{
if(activeGenre==="all"){
  setFiltered(movies);
  return;
}
const filtered = movies.filter((movie)=>movie.genres.includes(activeGenre));
setFiltered(filtered);
},[activeGenre])


  return (
    <div className='genres'>
      {
        allGenres.map((item) =>
        <Chip
        key={item.id}
  label={item.name}
  style={{
    margin:5
  }}
  clickable
  onClick={()=>setActiveGenre(item.setActiveGenre)}
  color="info"
/>
      )}
      

    </div>
  )
}

export default Genres