import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ClockSvg = () => {

    const [hoursMark, setHoursMark] = useState([
        {
            deg: 30,
            stroke: 0.2
        },
        {
            deg: 60,
            stroke: 0.2
        },
        {
            deg: 90,
            stroke: 0.5
        },
        {
            deg: 120,
            stroke: 0.2
        },
        {
            deg: 150,
            stroke: 0.2
        },
        {
            deg: 180,
            stroke: 0.5
        },
        {
            deg: 210,
            stroke: 0.2
        },
        {
            deg: 240,
            stroke: 0.2
        },
        {
            deg: 270,
            stroke: 0.5
        },
        {
            deg: 300,
            stroke: 0.2
        },
        {
            deg: 330,
            stroke: 0.2
        },
        {
            deg: 360,
            stroke: 0.5
        },
    ]);

    return <div >
    <svg 
        width="400" 
        fill="white" 
        stroke="black" 
        strokeWidth="1" 
        strokeLinecap="round"
        viewBox="0 0 40 40">
      
      <circle cx="20" cy="20" r="19" />
      <g className="marks-svg" 
        transform="translate(20, 20)"
        strokeWidth="0.2"
      >
        {
           hoursMark.map((hour, i)=> <line key={i} transform={'rotate(' + hour.deg + ')'} strokeWidth={hour.stroke} x1="15" y1="0" x2="16" y2="0" />) 
        }  
        {/* <line transform="rotate(30)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(60)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(90)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(120)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(150)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(180)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(210)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(240)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(270)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(300)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(330)" x1="15" y1="0" x2="16" y2="0" />
        <line transform="rotate(360)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" /> */}
        {/* <line transform="rotate(30)" x1="15" y1="0" x2="16" y2="0" /> */}
      </g>
      <line transform="translate(20, 20) rotate(330)" strokeWidth="1" x1="0" y1="0" x2="9" y2="0" className="hour-svg" />
      <line transform="translate(20, 20) rotate(270)" strokeWidth="0.6" x1="0" y1="0" x2="13" y2="0" className="minute-svg" />
      {/* <line x1="0" y1="0" x2="16" y2="0" class="seconds" /> */}
      <circle stroke="#d00505" strokeWidth="0.2" cx="20" cy="20" r="0.7" className="pin-svg" />
      {/* <text  x="0" y="0" class="tiaText-svg">#TIA</text> */}
    </svg>

  </div>
}

export default connect(null, null)(ClockSvg);
