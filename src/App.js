import React, { useState, createContext, useEffect } from 'react';
import NavContainer from './NavBar/NavContainer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import CV from './Pages/CV';
import { Github, Linkedin, StackOverflow } from './Icons';
import { v4 as uuidv4 } from 'uuid';

export const PageContext = createContext();

function App() {
  const [currentPage, setPage] = useState('Home');

  const renderContent = () => {
    switch (currentPage) {
      default:
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'CV':
        return <CV />;
    }
  };

  useEffect(() => {
    document.title = `Matt Stephens - ${currentPage}`;
  }, [currentPage]);

  const handleNav = (label) => {
    setPage(label);
    localStorage.setItem('curr', JSON.stringify(currentPage));
  };

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
    <PageContext.Provider value={{ currentPage, handleNav }}>
      <div
        style={{
          width: '100vw',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          background: '#424242',
          color: 'white',
          position: 'fixed',
          top: '0px',
          zIndex: '666',
        }}
      >
        <h2>Matt Stephens</h2>
        {theIcons.map(({ icon, link }) => {
          return (
            <a
              href={link}
              rel='noreferrer'
              target='_blank'
              style={{ color: 'white', fontSize: '30px' }}
              key={uuidv4()}
            >
              {icon}
            </a>
          );
        })}
      </div>
      {renderContent()}
      <NavContainer />
    </PageContext.Provider>
  );
}

export default App;
