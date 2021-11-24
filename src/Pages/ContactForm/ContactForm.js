import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const placeholders = ['Your name', 'Please enter your email', 'Subject'];

  const [msg, setMsg] = useState('');

  const notifyRequired = ({ target }) => {
    if (!target.value) setMsg('Please fill in all the fields');
  };

  const submit = () => {
    if (name && email && message && subject) {
      const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      if (!regex.test(email)) return setMsg('Please enter a valid email!');
      const serviceId = 'service_sixr7ub';
      const templateId = 'template_j4wcdkf';
      const userId = 'user_UgdTdgP7pyeJ6G7RUYbB7';
      const templateParams = {
        name,
        email,
        message,
        subject,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
      setEmailSent(true);
      setMsg("Thanks! I'll get back to you shortly!");
    } else {
      setMsg('Please fill in all the fields');
    }
  };

  return (
    <div className='contactContainer'>
      <input
        type='text'
        placeholder={placeholders[0]}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onMouseOut={notifyRequired}
        maxLength='50'
      />
      <input
        type='email'
        placeholder={placeholders[1]}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onMouseOut={notifyRequired}
        maxLength='100'
      />
      <input
        type='text'
        placeholder={placeholders[2]}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        onMouseOut={notifyRequired}
        maxLength='40'
      />
      <textarea
        placeholder='Your message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength='500'
      ></textarea>
      <button className='emailSubmit' onClick={submit}>
        Submit
      </button>
      <span className={emailSent ? 'visiblee' : 'hiddenn'}>{msg}</span>
    </div>
  );
}
