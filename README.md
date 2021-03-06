# [Matt Stephens Portfolio](https://mstephen19.github.io/react-portfolio)

A portfolio built entirely in React, utilizing state, context, and props. Users can read some general information about myself, see some of my recent projects, contact me, and download my CV while reading up on my technical skills.

This site is responsive, and has been tested on various screen sizes and mobile devices.

![Image](./src/images/site-demo.gif)

## Built With

- [React](https://reactjs.org/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Reveal](https://www.react-reveal.com/)
- [MaterialUI](https://mui.com/)
- [EmailJS](https://www.emailjs.com/)
- [FontAwesome](https://fontawesome.com)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Notable Features

### Page switching using context

```JavaScript
// NavItems.js
const { handleNav } = useContext(PageContext);

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
```

### Responsive widths and font sizes using clamp()

```CSS
/* Example in contact.css */
.contactContainer input,
textarea {
  width: clamp(200px, 75%, 800px);
  font-size: clamp(1.25rem, 5vw, 3rem);
  background: var(--main);
  border: 1px solid black;
  border-radius: 5px;
}
```

## Live deployed link

- [Check out the site here](https://mstephen19.github.io/react-portfolio)

## Created by

**Matt Stephens**

- [Link to Portfolio Site](https://mstephen19.github.io/newestPortfolio)
- [Link to Github](https://github.com/mstephen19)
- [Link to LinkedIn](https://www.linkedin.com/mstephen19)

### Acknowledgments

- Shoutout to [Jesse Lewis](https://www.linkedin.com/in/jesseaustinlewis/) for teaching me about component lifecycles and context within React
