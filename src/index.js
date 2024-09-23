import React from 'react';
import ReactDOM from "react-dom/client";
import App from './app/App';
import './index.css';

console.log(`
    You found me!
  |-------------------------|
  |                   __    | 
  |        .,-;-;-,. /'_\   |
  |    _/_/_/_|_\\_\\) /    |
  |   '-<_><_><_><_>=/\\    |
  |   \`/_/====/_/-'\\_\\   |
  |     ""     ""    ""     | 
  |  github: drewjordan414  |
  |-------------------------|  
`);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
