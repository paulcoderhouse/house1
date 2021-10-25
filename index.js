// var React = require('react');
// import React from 'react';
// import ReactDOM from 'react-dom';
// var ReactDOM = require('react-dom');

// ReactDOM.render(<h1> hello sweta </h1>, document.getElementById('root'));


// Jxs(using babel)
// ReactDOM.render(React.createElement('h1',null,"thapa technical"),
// document.getElementById('root'));

// this is using pure javascript
// var h1 = document.createElement("h1")
// h1.innerHTML = "Thapa Technical";
// document.getElementById("root").appendChild(h1);

// ReactDOM.render(<div>
//     <h1> hello sweta </h1>,
//     <p> pls subscribe</p>
//      </div>,
//      document.getElementById('root'));

// v16.x.x
//const arr = ["vinod","thapa","bhadr"]
//in react v16 it's possible for render()
//to return an array of elements.
// ReactDOM.render(
// [
// <h1> hello sweta </h1>,
// <p> pls subscribe</p>
//  ],
//  document.getElementById('root'));

// const flname = "vinod thapa";
// ReactDOM.render(<>
//      <h1>my name is {flname} </h1>
//     <p>my lucky number is {Math.random()}</p>
//     </>,
//     document.getElementById("root"));

//     const fname = "vinod";
//     const lname = "thapa";
//     ReactDOM.render(
//         <>
//         <h1>my name is {'${fname} ${lname}'} </h1>
//     <p>my lucky number is {Math.random()}</p>
//     </>, 
//     document.getElementById("root"));
  // challenge2// 
    //  import React from 'react';
    //  import ReactDOM from 'react-dom';

    // const currDate = new Date().toLocaleDateString();
    // const currTime = new Date().toLocaleTimeString();
    // ReactDOM.render(
    //     <>
    //     <h1>my name is sweta paul</h1>
    //     <p>current date is {currDate}</p>
    //     <p>current time is {currTime}</p>
    //     </>,
    //     document.getElementById('root')
    // );

    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // import './index.css';
    //  const name = "sweta";
    //  const img1 = "https://picsum.photos/200/300";
    //  const img2 = "https://picsum.photos/250/300";
    //  const img3 = "https://picsum.photos/300/300";
    //  const img4 = "https://picsum.photos/220/400";
    //  const links = "https://www.thapatechnical.com";
    // ReactDOM.render(
    // <>
    //   <h1 className = "heading" contentEditable="true"> my name is {name}</h1>
    //   <div className = "img_div">
    //   <img src={img1} alt="random images"/>
    //   <img src={img2} alt="random images"/>
    //   <img src={img3} alt="random images"/>
    //   <a href={links} target="_blank">
    //   <img src={img4} alt="random images"/>
    //   </a>
    //   </div>
    //   </>
    //   ,document.getElementById('root')
    // );
    //15slide

  //  import React from 'react';
  //  import ReactDOM from 'react-dom';
  //  import './index.css';
  //   const name = "sweta";
  //   const img1 = "https://picsum.photos/200/300";
  //   const img2 = "https://picsum.photos/250/300";
  //   const img3 = "https://picsum.photos/300/300";
  //   const img4 = "https://picsum.photos/220/400";
  //   const links = "https://www.thapatechnical.com";
    // Using css styling and importing css files
//    .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px  #ffe9c5;
//     margin-bottom: 50px;
//     font-family: 'Josefin Sans', sans-serif;
//   }
// const heading = {
//     color: "#fa9191",
//     textTransform: "capitalize",
//     textAlign: "center",
//       fontWeight: "bold",
//       textShadow: "0px 2px 4px  #ffe9c5",
//        marginBottom: "50px",
//       fontFamily: "'Josefin Sans', sans-serif"
// };
//    ReactDOM.render(
//    <>
//      <h1 style ={heading}  className = "heading" contentEditable="true"> my name is {name}</h1>
//      <div className = "img_div">
//      <img src={img1} alt="random images"/>
//      <img src={img2} alt="random images"/>
//      <img src={img3} alt="random images"/>
//      <a href={links} target="_blank">
//      <img src={img4} alt="random images"/>
//      </a>
//      </div>
//      </>
//      ,document.getElementById('root')
//    );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// let currDate = new Date(2020,8,9,20);
// currDate = currDate.getHours();
// let greeting = "";
// let cssStyle = {};

// if(currDate>=1 && currDate < 12) {
//    greeting = "Good morning";
//    cssStyle.color = "green";
// }else if (currDate>=12 && currDate<19){
//    greeting = "Good afternoon";
//    cssStyle.color = "orange";
// }else {
//   greeting = "Goodninght";
//   cssStyle.color = "purple";
// }

// ReactDOM.render(
//   <>
//   <div>
//   <h1>Hello sir,<span style = {cssStyle} > {greeting} </span></h1>
//   </div>
//   </>
//   ,document.getElementById('root')
// );

//react components in hindi****
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";


// ReactDOM.render( <App/>, document.getElementById("root")
// );

//The above function of greeting using components now
// import React from "react";
// import  ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <App/>,document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import App2 from  "./App2";

// ReactDOM.render(
//   < App2/>,document.getElementById("root")
// );

// import React from "react";
// import ReactDOM  from "react-dom";
// import App4 from "./App4";
// import App from "./App";
// import  "./index.css";
// import {BrowserRouter} from "react-router-dom";

// ReactDOM.render (
//   <BrowserRouter>
// <App4/>
// </BrowserRouter>,document.getElementById("root")
// );

import React from "react";
import  ReactDOM  from "react-dom";
import App5 from "./components1/App5";
import "./index.css";

ReactDOM.render (
  <App5/>,
  document.getElementById("root")
);