import React, { useState,  useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ClockSvg = () => {

    const [hoursMark] = useState([
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

    const [time, setTime] = useState({
        hourHand: (((new Date()).getHours() % 12) * 30) + Math.floor((new Date()).getMinutes() / 2) + 270,
        minHand: (new Date().getMinutes()) * 6 + 270  
    });

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(
                'executing : ' + new Date()
            );
            setTime({
                hourHand: (((new Date()).getHours() % 12) * 30) + Math.floor((new Date()).getMinutes() / 2) + 270,
                minHand: (new Date().getMinutes()) * 6 + 270      
            });
        }, 60000);
        return () => clearInterval(interval);
      }, []);


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
      </g>
      <line transform={"translate(20, 20) rotate(" + time.hourHand + ")"} strokeWidth="1" x1="0" y1="0" x2="9" y2="0" className="hour-svg" />
      <line transform={"translate(20, 20) rotate(" + time.minHand + ")"} strokeWidth="0.6" x1="0" y1="0" x2="13" y2="0" className="minute-svg" />
      {/* <line x1="0" y1="0" x2="16" y2="0" class="seconds" /> */}
      <circle stroke="#d00505" strokeWidth="0.2" cx="20" cy="20" r="0.7" className="pin-svg" />
      {/* <text  x="0" y="0" class="tiaText-svg">#TIA</text> */}
    </svg>

  </div>
}

export default connect(null, null)(ClockSvg);
