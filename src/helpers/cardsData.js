import verical from "../assets/my-vertical.PNG";
import memory from "../assets/memory.PNG";
import rockpaper from "../assets/rock-paper.PNG";
import music from "../assets/music.PNG";
import task from "../assets/task.PNG";

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
  {
    id: 4,
    img: music,
    heading: "Music controller",
    text: `Music control web application created with Django on the backend and React on frontend. Integrated with Spotify API
    lets you control music in rooms that you create. Guest can vote to skip song, host can allow for votes. Styling with Material UI. `,
    github: "https://github.com/szalashaska/music-controller",
  },
  {
    id: 5,
    img: task,
    heading: "Task Tracker",
    text: `Simple task tracking app created with React and JSON Server. Add your task and track them, delete when they are done. Make task more visible by setting
    important label when creating task or double click on existing one. Edit added task by clicking edit button.`,
    github: "https://github.com/szalashaska/rock-paper-scissors",
  },
];
