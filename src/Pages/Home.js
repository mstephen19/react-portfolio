import React from 'react';
import Bounce from 'react-reveal/Bounce';
import me from '../images/profile-modified-min.png';
import Page from './PageComponents/Page';

export default function Home() {
  const imageStyle = {
    width: '70vw',
  };

  return (
    <Page head='About Me' comeIn>
      <Bounce left>
        <img src={me} alt='me' style={imageStyle}></img>
      </Bounce>
      <p>Hey! I'm Matt!</p>
    </Page>
  );
}
