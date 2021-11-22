import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfo,
  faHome,
  faProjectDiagram,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

export function Home() {
  return <FontAwesomeIcon icon={faHome} />;
}

export function Info() {
  return <FontAwesomeIcon icon={faInfo} />;
}

export function Projects() {
  return <FontAwesomeIcon icon={faProjectDiagram} />;
}

export function Contact() {
  return <FontAwesomeIcon icon={faEnvelope} />;
}

export function File() {
  return <FontAwesomeIcon icon={faFile} />;
}
