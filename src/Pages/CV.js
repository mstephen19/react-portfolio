import React from 'react';
import Page from './PageComponents/Page';
import cv from './assets/Matthias Stephens CV.pdf';

export default function CV() {
  const skills = [
    'Javascript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'React',
    'Apollo',
    'GraphQL',
    'Puppeteer',
    'Cheerio',
    'jQuery',
    'Mongoose',
    'Sequelize',
    'Jest',
    'Git/Github',
    'CSS',
    'IndexedDB',
    'Handlebars',
    'Heroku',
  ];
  return (
    <Page head='My CV/Resume' comeIn>
      <a href={cv} download>
        <button
          className='cvBtn'
          style={{ fontSize: 'clamp(50px, 2vw, 100px)' }}
        >
          Download my CV
        </button>
      </a>
      <h2 style={{ margin: '10px', fontSize: 'clamp(50px, 2.5vw, 75px)' }}>
        My skills:
      </h2>
      <ul style={{ fontSize: 'clamp(25px, 2vw, 50px)', marginBottom: '60px' }}>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </Page>
  );
}
