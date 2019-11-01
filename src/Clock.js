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
    return <div >
    <svg style={svgStyle} viewBox="0 0 40 40">
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
      {/* <line x1="0" y1="0" x2="16" y2="0" class="seconds" /> */}
      <circle cx="20" cy="20" r="0.7" className="pin" />
      <text style={tiaText} x="0" y="0" className="tiaText">#TIA</text>
    </svg>

  </div>
}

export default connect(null, null)(Clock);
