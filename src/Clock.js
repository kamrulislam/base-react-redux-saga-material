import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Clock = () => {
    const svgStyle = {
        width: '400px',
        fill: 'white',
        stroke: 'black',
        'stroke-width': 1,
        'stroke-linecap': 'round',
        transform: 'rotate(-90deg)'
    };
    const tiaText = {
        'font-size': '1px',
        'font-family': 'sans-serif',
        transform: 'translate(14px, 19px) rotate(90deg)',
        fill: '#dfdfdf',
        stroke: 'none'
    };
    return <div >
    <svg style={svgStyle} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="19" />
      <g class="marks">
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
      <line x1="0" y1="0" x2="9" y2="0" class="hour" />
      <line x1="0" y1="0" x2="13" y2="0" class="minute" />
      {/* <line x1="0" y1="0" x2="16" y2="0" class="seconds" /> */}
      <circle cx="20" cy="20" r="0.7" class="pin" />
      <text style={tiaText} x="0" y="0" class="tiaText">#TIA</text>
    </svg>

  </div>
}

export default connect(null, null)(Clock);
