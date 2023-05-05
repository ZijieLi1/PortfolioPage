import React from 'react';

function Wave() {
  return (
    <svg viewBox="0 0 1440 320">
      <path
        fill="#ffb6c1"
        d="M0,256L60,240C120,224,240,192,360,170.7C480,149,600,139,720,154.7C840,171,960,213,1080,202.7C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          animation: 'wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        }}
      ></path>
    </svg>
  );
}

export default Wave;
