import React, { useEffect, useRef, useState } from "react";
import Bottom_bar from "./Bottom_bar";

 
 const Structure1 = (props) => {
   
//  const title1 = useRef()
//  const artist = useRef()
//   const album = useRef()

//  const loadSong = (songs) => {
//    title1.current.textContent = props.songs.title;
//    artist.current.textContent = props.songs.artist;
//    album.current.textContent = props.songs.album;


// }

  return (
      <>
      <div className="structure_1">
            <div className= "details">
                <div className="left">
                    <img src = {props.songs[props.currentSongIndex].img_src} alt="img" />
                </div>
                <div className="right_side">
                  <div className="heading">
                    <h4>Now Playing </h4>
                    <h2 className="title"  song={props.songs[props.currentSongIndex].title}>title</h2>
                    <h3 className="artist"  song={props.songs[props.currentSongIndex].artist}>artist</h3>
                    <h5 className="album" song={props.songs[props.currentSongIndex].album} >album</h5>
                 </div>
                 <Bottom_bar/>
                 </div> 

              </div>
            
       </div>
      </>
  )
}
export default Structure1;