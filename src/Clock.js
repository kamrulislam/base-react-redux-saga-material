import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Clock = () => {
    const svgStyle = {
        width: '400px',
        fill: 'white',
        stroke: 'black',
        strokeWidth: 1,
        strokeLinecap: 'round',
        transform: 'rotate(-90deg)'
    };
    const tiaText = {
        fontSize: '1px',
        fontFamily: 'sans-serif',
        transform: 'translate(14px, 19px) rotate(90deg)',
        fill: '#dfdfdf',
        stroke: 'none'
    };

    const html = `
    <svg 
        width="400" 
        fill="white" 
        stroke="black" 
        stroke-width="1" 
        stroke-linecap="round"
        viewBox="0 0 40 40">
      
      <circle cx="20" cy="20" r="19"></circle>
      <g class="marks-svg" 
        transform="translate(20, 20)"
        stroke-width="0.2"
      ><line transform="rotate(30)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(60)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(90)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(120)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(150)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(180)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(210)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(240)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(270)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(300)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(330)" stroke-width="0.2" x1="15" y1="0" x2="16" y2="0" ></line><line transform="rotate(360)" stroke-width="0.5" x1="15" y1="0" x2="16" y2="0" ></line>      </g>
      <line transform="translate(20, 20) rotate(502)" stroke-width="1" x1="0" y1="0" x2="9" y2="0" class="hour-svg"></line>
      <line transform="translate(20, 20) rotate(540)" stroke-width="0.6" x1="0" y1="0" x2="13" y2="0" class="minute-svg"></line>
      <circle stroke="#d00505" stroke-width="0.2" cx="20" cy="20" r="0.7" class="pin-svg"></circle>
    </svg>
    `;

    return <div dangerouslySetInnerHTML={{__html: html}}>
    {/* <svg style={svgStyle} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19" />
      <g className="marks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>
      <line x1="0" y1="0" x2="9" y2="0" className="hour" />
      <line x1="0" y1="0" x2="13" y2="0" className="minute" />
      <circle cx="20" cy="20" r="0.7" className="pin" />
      <text style={tiaText} x="0" y="0" className="tiaText">#TIA</text>
    </svg> */}

  </div>
}

export default connect(null, null)(Clock);
