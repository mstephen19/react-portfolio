import React from 'react';

export default function Header({ title }) {
  return (
    <div
      style={{
        width: '100%',
        height: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '15px',
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          width: '80%',
          background: 'white',
          height: '2px',
        }}
      ></div>
    </div>
  );
}
