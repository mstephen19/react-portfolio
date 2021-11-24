import React from 'react';
import Page from './PageComponents/Page';
import cv from './assets/Matthias Stephens CV.pdf';

export default function CV() {
  return (
    <Page head='My CV/Resume' comeIn>
      <a href={cv} download>
        <button
          className='cvBtn'
          style={{ fontSize: 'clamp(50px, 2vw, 100px)' }}
        >
          Download my CV!
        </button>
      </a>
    </Page>
  );
}
