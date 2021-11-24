import React from 'react';
import Page from './PageComponents/Page';
import ContactForm from './ContactForm/ContactForm';

export default function Contact() {
  return (
    <Page head='Contact Me' comeIn>
      <ContactForm />
    </Page>
  );
}
