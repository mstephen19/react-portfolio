import React, { useState, createContext } from 'react';
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

  const handleNav = (label) => {
    setPage(label);
  };

  return (
    <PageContext.Provider value={{ currentPage, handleNav }}>
      {renderContent()}
      <NavContainer />
    </PageContext.Provider>
  );
}

export default App;
