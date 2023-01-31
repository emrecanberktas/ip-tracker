# Frontend Mentor - IP address tracker

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Tech Stack](#tech-stack)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Live Site URL: [https://ip-tracker-pearl.vercel.app/](https://ip-tracker-pearl.vercel.app/)

## My process

### Tech Stack

- HTML5
- CSS
- JavaScript
- Zustand
- [Leaflet](https://leafletjs.com/)
- [React](https://reactjs.org/) - JS library

### What I learned

I learned how to use Zustand to manage state in React. I also learned how to use the [Leaflet](https://leafletjs.com/) library to create a map.

```js
const dataStore = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));`
```

### Continued development

I want to continue to this project and add more features.
