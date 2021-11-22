import React, { useContext, useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Contact, Home, Projects, File } from '../Icons';
import { PageContext } from '../App';
import { v4 as uuidv4 } from 'uuid';

export default function NavItems() {
  const { handleNav } = useContext(PageContext);
  const [selected, setSelected] = useState('Home');

  const handleClick = (label) => {
    handleNav(label);
    setSelected(label);
  };

  const mainStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#424242',
  };

  const buttonStyle = {
    color: 'white',
    fontSize: '25px',
  };

  const selectedStyle = {
    color: '#424242',
    fontSize: '25px',
    background: 'white',
  };

  const navItems = [
    {
      label: 'Home',
      icon: <Home />,
    },
    {
      label: 'Projects',
      icon: <Projects />,
    },
    {
      label: 'Contact',
      icon: <Contact />,
    },
    {
      label: 'CV',
      icon: <File />,
    },
  ];

  return (
    <BottomNavigation sx={mainStyle} showLabels value={'Cool'}>
      {navItems.map(({ label, icon }) => {
        return (
          <BottomNavigationAction
            label={label}
            icon={icon}
            sx={label === selected ? selectedStyle : buttonStyle}
            onClick={() => handleClick(label)}
            key={uuidv4()}
          />
        );
      })}
    </BottomNavigation>
  );
}
