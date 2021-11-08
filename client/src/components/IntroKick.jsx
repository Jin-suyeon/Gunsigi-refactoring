import React, { useEffect, useState } from 'react';
import '../styles/landing/introKick.scss';
import { kickContents } from '../assets/Main';

function IntroKick() {
  const [textIdx, setTextIdx] = useState(0);
  useEffect(() => {
    const idx = setTimeout(() => {
      if (textIdx === 2) {
        setTextIdx(0);
      } else {
        setTextIdx(textIdx + 1);
      }
    }, 7000);
    return () => clearTimeout(idx);
  }, [textIdx]);

  return (
    <div className="introKick">
      <div className="textBox">
        <h3>{kickContents[textIdx].title}</h3>
        <p>{kickContents[textIdx].desc}</p>
      </div>
      <div className="imageBox">
        <div className="frameBox">
          <div className="frame">
            <img className="app" alt="site demo" src="/images/test2.gif" />
            <img className="web" alt="site demo" src="/images/test_web.gif" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroKick;
