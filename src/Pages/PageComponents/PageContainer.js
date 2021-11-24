import React from 'react';
import './page.css';

export default function PageContainer(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
      }}
      className={props.comeIn && 'come-in'}
    >
      {props.children}
    </div>
  );
}
