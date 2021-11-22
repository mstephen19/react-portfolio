import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfo,
  faHome,
  faProjectDiagram,
  faEnvelope,
  faFile,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

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

export function Link() {
  return <FontAwesomeIcon icon={faLink} />;
}

export function Github() {
  return <FontAwesomeIcon icon={faGithub} />;
}

export function Linkedin() {
  return <FontAwesomeIcon icon={faLinkedin} />;
}

export function StackOverflow() {
  return <FontAwesomeIcon icon={faStackOverflow} />;
}
