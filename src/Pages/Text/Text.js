import React from 'react';

export default function Text(props) {
  return (
    <p
      style={{
        width: '80vw',
        maxWidth: '700px',
        fontSize: 'clamp(1rem, 1.5vw, 2.5rem)',
      }}
    >
      {props.children}
    </p>
  );
}
