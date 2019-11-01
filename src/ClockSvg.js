import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ClockSvg = () => {
    // const svgStyle = {
    //     width: '400px',
    //     fill: 'white',
    //     stroke: 'black',
    //     'stroke-width': 1,
    //     'stroke-linecap': 'round',
    //     transform: 'rotate(-90deg)'
    // };
    // const tiaText = {
    //     'font-size': '1px',
    //     'font-family': 'sans-serif',
    //     transform: 'translate(14px, 19px) rotate(90deg)',
    //     fill: '#dfdfdf',
    //     stroke: 'none'
    // };
    return <div >
    <svg 
        width="400" 
        fill="white" 
        stroke="black" 
        stroke-width="1" 
        stroke-linecap="round"
        viewBox="0 0 40 40">
      
      <circle cx="20" cy="20" r="19" />
      <g class="marks-svg" 
        transform="translate(20, 20)"
        stroke-width="0.2"
      >
        <line transform="rotate(30)" x1="15" y1="0" x2="16" y2="0" />
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
        <line transform="rotate(360)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" />
        {/* <line transform="rotate(30)" x1="15" y1="0" x2="16" y2="0" /> */}
      </g>
      <line transform="translate(20, 20) rotate(330)" stroke-width="1" x1="0" y1="0" x2="9" y2="0" class="hour-svg" />
      <line transform="translate(20, 20) rotate(270)" stroke-width="0.6" x1="0" y1="0" x2="13" y2="0" class="minute-svg" />
      {/* <line x1="0" y1="0" x2="16" y2="0" class="seconds" /> */}
      <circle stroke="#d00505" stroke-width="0.2" cx="20" cy="20" r="0.7" class="pin-svg" />
      <text  x="0" y="0" class="tiaText-svg">#TIA</text>
    </svg>

  </div>
}

export default connect(null, null)(ClockSvg);
