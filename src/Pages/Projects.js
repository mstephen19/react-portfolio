import React from 'react';
import Page from './PageComponents/Page';
import Project from './ProjectComponents/Project';
import api from '../images/proj/api-demo.gif';
import charity from '../images/proj/charity-demo.gif';
import haunted from '../images/proj/haunted-demo.gif';
import notes from '../images/proj/notes-demo.gif';
import omegle from '../images/proj/omegle-demo.gif';

export default function Projects() {
  const projects = [
    {
      image: api,
      title: 'E-Commerce Back-End API',
      description:
        'A fully functional RESTful API with CRUD routes for an e-commerce web-app. Built on Node.js, Express.js, and MySQL.',
      github: 'https://github.com/mstephen19/ecommerce-back-end',
    },
    {
      image: charity,
      title: 'MyCharitySearch',
      description:
        'A web-app built for those searching for new and reputable charities to which they can donate to. Utilizes the GlobalGiving and CharityNavigator APIs.',
      github: 'https://github.com/alonzofroman/charities-project',
      deployed: 'alonzofroman.github.io/charities-project/',
    },
    {
      image: haunted,
      title: 'Haunted',
      description:
        'Forum/Social Network designed for posting about and discovering different ghost sightings in your area/any city in the world.',
      deployed: 'https://warm-springs-18820.herokuapp.com/',
      github: 'https://github.com/alonzofroman/haunted-forum',
    },
    {
      image: notes,
      title: 'Express Notes',
      description:
        'A sleek and simple note-taking application built with Node.js and Express.js.',
      deployed: 'https://salty-plateau-23106.herokuapp.com/notes',
      github: 'https://github.com/mstephen19/noteTaker',
    },
    {
      image: omegle,
      title: 'Omegle ChatBot',
      description:
        'A Google Chrome extension built entirely in JavaScript utilizing DOM manipulation and a few scripts to automate the process of spamming Omegle.',
      deployed:
        'https://www.linkedin.com/posts/mstephen19_javascript-project-video-activity-6846827501633855488-_tJj',
      github: 'https://github.com/mstephen19/omegle-Chat-Bot',
    },
  ];
  return (
    <Page head='My Projects' comeIn>
      {projects.map(({ ...info }, i) => {
        if (i === projects.length - 1) {
          return <Project {...info} lastOne />;
        }
        return <Project {...info} />;
      })}
    </Page>
  );
}
