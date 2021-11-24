import React from 'react';
import { Github, Linkedin, StackOverflow } from '../Icons';

export default function Header() {
  const theIcons = [
    {
      icon: <Github />,
      link: 'https://github.com/mstephen19/',
    },
    {
      icon: <Linkedin />,
      link: 'https://www.linkedin.com/in/mstephen19/',
    },
    {
      icon: <StackOverflow />,
      link: 'https://stackoverflow.com/users/16521381/mstephen19',
    },
  ];
  return (
    <div
      style={{
        width: '100vw',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#424242',
        color: 'white',
      }}
    >
      {theIcons.map(({ icon, link }) => {
        return (
          <a href={link} rel='noreferrer' target='_blank'>
            {icon}
          </a>
        );
      })}
      TESTING
    </div>
  );
}
