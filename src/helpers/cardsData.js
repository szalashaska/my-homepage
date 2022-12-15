import verical from "../assets/my-vertical.PNG";
import memory from "../assets/memory.PNG";
import rockpaper from "../assets/rock-paper.PNG";

export const projectCards = [
  {
    id: 1,
    img: verical,
    heading: "My Vertical World",
    text: `Browser based platform for climbers created with Django on the backend and React on the frontend.
       With use of Canvas API you can draw climbing route path on the wall image and than add its location on map provided by OpenLayers API.
       Frontend styling with Styled Components.`,
    link: "https://my-vertical-world-railway-production.up.railway.app/",
    github: "https://github.com/szalashaska/my-vertical-world",
  },
  {
    id: 2,
    img: memory,
    heading: "Memory Card Game",
    text: `Simple web app - browser based game created with HTML, CSS, JavaScript and Pythons's Flask on backend.
       In game you are looking for matching pairs by fliping cards. With the use of Pexels API (photos stock) you can choose theme of the cards you are playing with.`,
    link: "https://web-production-120b.up.railway.app/",
    github: "https://github.com/szalashaska/memory",
  },

  {
    id: 3,
    img: rockpaper,
    heading: "Rock Paper Scissors Lizard Spock",
    text: `Game created with React, using TypeScript and Sass. Responsive design, no animation libraries.
      In game you are fighting against AI by choosing between rock, paper, lizard and spock. If the player wins, they gain
      1 point, else they loses point. This is a solution to Frontend Mentor challenge.`,
    link: "https://rock-paper-scissors-lizard-spock-virid.vercel.app/",
    github: "https://github.com/szalashaska/rock-paper-scissors",
  },
];
