import React, { useState, useEffect} from "react";
import Structure1 from "./Structure1";
import Controls from "./Controls";

const App5 = ()  => {
    
   const [songs] =useState( [
      {
           name: "imagesong1",
           title: "I Don't Care",
           artist: "Ed Sheeran,J Bieber",
           album: "No.6 Collaborations Project",
           img_src: "/images/imagesong1.jpg",
           src: "/music/imagesong1.mp3",
       },
       {
           name: "imagesong2",
           title: "Memories",
           artist: " Maroon 5 ",
           album: "Memories",
           img_src: "/images/imagesong2.jpg",
           src: "/music/imagesong2.mp3",
       },
       {
           name: "imagesong3",
           title: "Peaches",
           artist: " Justin Bieber ",
           album: "Justice",
           img_src: "/images/imagesong3.jpg",
           src: "/music/imagesong3.mp3",
       },
       {
           name: "imagesong4",
           title: "Perfect",
           artist: " Ed Sheeran ",
           album: "Divide",
           img_src: "/images/imagesong4.jpg",
           src: "/music/imagesong4.mp3",
       },
       {
           name: "imagesong5",
           title: "Senorita",
           artist: "C Cabello,S Mendes",
           album: "Senorita",
           img_src: "/images/imagesong5.jpg",
           src: "/music/imagesong5.mp3",
       },
       {
           name: "imagesong6",
           title: "Shape Of You",
           artist: "Ed Sheeran",
           album: "Divide",
           img_src: "/images/imagesong6.jpg",
           src: "/music/imagesong6.mp3",
       },
      
   ])
// const audioRef = useRef()
// const audio = audioRef.current
// let isPlaying = false;
//   function playMusic() {
//     isPlaying = true;
//     audio.play();
// }
//   function pauseMusic () {
//  isPlaying = false;
//  audio.pause();

// }
// function clickHandler () {
//  (isPlaying) ? pauseMusic() : playMusic()
// }
//  const loadSong = (songs) => {
    //      title.textContent = songs.title;
    //      artist.textContent = songs.artist;
    //      album.textContent = songs.album;
    //      audio.src = `./music/${songs.name}.mp3`;
    //      img.src = `./images/${songs.name}.jpg`;
    //  };

    // let songIndex = 0;
    // const nextSong = (songs) => {
    //     songIndex = (songIndex + 1 ) % songs.length;
    //     loadSong(songs[songIndex]);
    //    playMusic();
    // }
    // const prevSong = (songs) => {
    //     songIndex = (songIndex - 1 + songs.length) % songs.length;
    //    loadSong(songs[songIndex]);
    //    playMusic();
    // }
    //progress bar work
  //music.addEventListener("timeupdate",(event) => {
  
  //  const {currentTime, duration} = event.srcElement;
  //  let progress_time = (currentTime/duration) * 100;
  //  progress.style.width = `${progress_time}%`;

   //music duration update
  //  let min_duration = Math.floor(duration / 60);
  //  let sec_duration = Math.floor(duration % 60);

  //  let tot_duration = `${min_duration}:${sec_duration}`;
  //  if(duration) {
  //  total_duration.textContent = `${tot_duration}`;
  //  }

   //current duration update
//    let min_currentTime = Math.floor(currentTime / 60);
//    let sec_currentTime = Math.floor(currentTime % 60);
//    if(sec_currentTime < 10) {
//        sec_currentTime = `0${sec_currentTime}`;
//    }

//    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
//    current_time.textContent = `${tot_currentTime}`;
// });

//progress-area onclick function
// progress_area.addEventListener("click",(event) => {
//    //console.log(event);
//    const{duration} = music;

//    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;

//    music.currentTime = move_progress;
// })


 //if music ends call next song
// music.addEventListener("ended",nextSong);
// next.addEventListener("click", nextSong);
// prev.addEventListener("click", prevSong);

// randomSong.addEventListener("click",random);
// refresh.addEventListener("click", loop );
// repeat.addEventListener("click", loopForRepeat);
// love_btn.addEventListener("click", changeColor);

// function getRandomNumber(min,max) {
//    let step1 = max-min+1;
//    let step2 = Math.random() * step1;
//    let result = Math.floor(step2) + min;
//    return result;

// }
// function random() {
//    let randomIndex = getRandomNumber(0, songs.length - 1);
//    songIndex = randomIndex;
//    loadSong(songs[songIndex]);
//    playMusic();
// }

// function loop (){
//    music.currentTime = 0;
//    playMusic();
// }

// function loopForRepeat() {
//    if(music.loop){
//        music.loop = false;
//        $("#repeat").attr("src", "./music/imagesong2.mp3");
//    }else{
//        music.loop = true;
//        $("#repeat").attr("src", "./music/imagesong3.mp3");
//    }  
// }
// volumeBtn.addEventListener("click", () => {
//      volumeBtn.classList.toggle("active");
//      volumeSlider.classList.toggle("active");
// })
// volumeSlider.addEventListener("input", () => {
//    music.volume = volumeSlider.value;
// })

// function changeColor() { 
//     if(love_btn.style.color == "black"){
//         love_btn.style.color = "red"
//     }else {
//         love_btn.style.color = "black"
//     }
// }


    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
         setNextSongIndex(() => {
           if(currentSongIndex + 1 > songs.length - 1) {
             return 0;
           }else {
             return currentSongIndex + 1;
           }
         });
       }, [currentSongIndex]);
   return (
      <>
         <div className="app5">
           <Structure1
              currentSongIndex = {currentSongIndex}
              setCurrentSongIndex = {setCurrentSongIndex}
              nextSongIndex = {nextSongIndex}
              songs = {songs}
              
           />
           <Controls
              currentSongIndex = {currentSongIndex}
              setCurrentSongIndex = {setCurrentSongIndex}
              nextSongIndex = {nextSongIndex}
              songs = {songs}
          
           />
         </div>
      </>
       
   )
   
}
export default App5;