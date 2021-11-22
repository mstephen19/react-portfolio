import React, { useState, createContext, useEffect } from 'react';
import NavContainer from './NavBar/NavContainer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import CV from './Pages/CV';

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

  return (
    <PageContext.Provider value={{ currentPage, handleNav }}>
      {renderContent()}
      <NavContainer />
    </PageContext.Provider>
  );
}

export default App;
