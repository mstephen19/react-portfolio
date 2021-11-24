import React from 'react';
import Bounce from 'react-reveal/Bounce';
import me from '../images/profile-modified-min.png';
import Page from './PageComponents/Page';
import Text from './Text/Text';

export default function Home() {
  const imageStyle = {
    width: '70vw',
    maxWidth: '400px',
  };

  return (
    <Page head='About Me' comeIn>
      <Bounce left>
        <img src={me} alt='me' style={imageStyle}></img>
      </Bounce>
      <Text>
        Hello! I'm Matt! I'm a student at UC Berkeley and full-stack web
        developer with experience with many different modern technologies. I am
        well-versed in the modern MERN stack, and am always eager to learn more
        and sharpen my skills. My biggest passion is in writing clean,
        efficient, and functional code that impacts people every day.
      </Text>
    </Page>
  );
}
