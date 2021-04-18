import React from 'react';
import ReactDOM from 'react-dom'
import Card from "./Card"
import sdata from './sdata';
 import './index.css';
// import App from './App';

const ncard = (val) => {
    return(
        <Card imgsrc={val.img} title={val.title} sName={val.sName} sLink={val.sLink}/>
    )
} 




ReactDOM.render( 
    <>
      <h1 className="heading_style">Top 5 Series</h1>
      
      {sdata.map(ncard)}
    </>,
    document.getElementById('root')
)

