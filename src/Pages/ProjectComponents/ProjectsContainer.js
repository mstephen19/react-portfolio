import React from 'react';

export default function ProjectsContainer(props) {
  return (
    <div style={{ flexWrap: 'wrap', width: '90vw' }}>{props.children}</div>
  );
}
