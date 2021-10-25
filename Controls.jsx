import { StylesContext } from "@material-ui/styles";
import React, {useEffect, useRef, useState} from "react";
import { FaBackward, FaForward, FaRandom, FaPlay, FaRedoAlt, FaSyncAlt, FaVolumeUp, FaPause, FaPagelines } from "react-icons/fa";

function Controls  (props) {

    const audioRef = useRef()

    let isPlaying = false;
      function playMusic() {
        isPlaying = true;
        audioRef.current.play();
    }
      function pauseMusic () {
     isPlaying = false;
     audioRef.current.pause();
    
    }
    function clickHandler () {
     (isPlaying) ? pauseMusic() : playMusic()
    
    }

    
        // const nextSong = () => {
        //     props.currnrtSongIndex = (props.currentSongIndex + 1 ) % props.songs.length;
        //     props.songs[props.currentSongIndex]
            
        //     playMusic();
           
       // }
        // const prevSong = () => {
        //     songIndex = (songIndex - 1 + songs.length) % songs.length;
        //    (songs[songIndex]);
           
        // }

// const skipSong = (forwards = true) => {
//     if(forwards) {
//         props.setCurrentSongIndex(() => {
//             let temp = props.currentSongIndex;
//             temp++;

//             if(temp > props.songs.length - 1) {
//                 temp = 0;
//             }
//             return temp;
//                playMusic();
//         })
//     }else {
//         props.setCurrentSongIndex(() => {
//             let temp = props.currentSongIndex;
//             temp--;

//             if(temp < 0) {
//                 temp = props.songs.length - 1
//             }
//             return temp;
//             pauseMusic();
//         })
//     }
// }

   
    return (
        <>
        <div className="controls">
        
        <audio ref={audioRef} src={props.songs[props.currentSongIndex].src}></audio>
         <div className="music_controls">
        <FaRandom  className="control_btn"/>
        <FaRedoAlt className="control_btn"/>
        <div className="play_pause">
            <button className="skip_btn"><FaBackward /></button>
            <button className="play_btn" ><FaPlay onClick={clickHandler} /></button>
            <button className="skip_btn"><FaForward /></button>
        </div>
        <FaSyncAlt className="control_btn"/> 
        {/* <input type="range" id="volume-slider" className="volume-slider" max="1" value="1" step="0.1"/>  */}
        <FaVolumeUp className="control_btn"/>
        </div>
        <div className="progress-area" id="progress-area">
            <div className="progress-bar" id="progress-bar">
            </div>
            <div className="timer">
                <span className="current-time"> 0:00</span>
                <span className="duration"> 2:08</span>

            </div>
        </div>
        </div>
        </>
    )

}
export default Controls;