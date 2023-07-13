import React, { useState, useEffect } from 'react';
import './ScrollColorPanel.css';

const ScrollColorPanel = () => {
  const [activeColor, setActiveColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + window.innerHeight / 3;

      const panels = Array.from(document.getElementsByClassName('panel'));
      for (let i = 0; i < panels.length; i++) {
        const panel = panels[i];
        const panelTop = panel.offsetTop;
        const panelBottom = panelTop + panel.offsetHeight;

        if (panelTop <= scroll && panelBottom > scroll) {
          setActiveColor(panel.getAttribute('data-color'));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="panel" data-color="white">
        <div>
          <h1>Magic scrolling colours</h1>
          <p>
            Scroll to animate the background color of the body as a full height
            panel becomes visible.
          </p>
          <p>
            I have tried to comment the code, particularly the JavaScript, as
            much as possible. I hope it's clear to understand.
          </p>
          <p>
            If you have any questions, my Twitter is{' '}
            <a href="https://twitter.com/daveredfern">@daveredfern</a>.
          </p>
        </div>
      </div>
      <div className="panel" data-color="violet">
        <h2>Violet panel</h2>
      </div>
      <div className="panel" data-color="indigo">
        <h2>Indigo panel</h2>
      </div>
      <div className="panel" data-color="blue">
        <h2>Blue panel</h2>
      </div>
      <div className="panel" data-color="green">
        <h2>Green panel</h2>
      </div>
      <div className="panel" data-color="yellow">
        <h2>Yellow panel</h2>
      </div>
      <div className="panel" data-color="orange">
        <h2>Orange panel</h2>
      </div>
      <div className="panel" data-color="red">
        <h2>Red panel</h2>
      </div>

      <style>{`
        .color-white {
          background-color: #f4f4f4;
        }
        .color-violet {
          background-color: #7A4EAB;
        }
        .color-indigo {
          background-color: #4332CF;
        }
        .color-blue {
          background-color: #2F8FED;
        }
        .color-green {
          background-color: #4DCF42;
        }
        .color-yellow {
          background-color: #FAEB33;
        }
        .color-orange {
          background-color: #F19031;
        }
        .color-red {
          background-color: #F2293A;
        }
      `}</style>

      <style>{`
        .active {
          transition: background-color 1s ease;
        }
      `}</style>

      <style>{`
        .panel {
          min-height: 100vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-family: sans-serif;
        }
      `}</style>

      <style>{`
        body {
          text-align: center;
          font-size: 120%;
          line-height: 1.618;
        }

        h1, h2 {
          font-size: 3em;
          letter-spacing: -0.05em;
          line-height: 1.1;
        }

        p {
          max-width: 30em;
          margin-bottom: 1.618em;
        }

        a {
          color: #4332CF;
        }
      `}</style>

      <style>{`
        .${activeColor} {
          background-color: var(--color-${activeColor}) !important;
        }
      `}</style>
    </div>
  );
};

export default ScrollColorPanel;
