import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Contact, Home, Projects, File } from './Icons';

export default function Nav() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label='About' icon={<Home />} />
      <BottomNavigationAction label='Portfolio' icon={<Projects />} />
      <BottomNavigationAction label='Contact' icon={<Contact />} />
      <BottomNavigationAction label='CV/Resume' icon={<File />} />
    </BottomNavigation>
  );
}
