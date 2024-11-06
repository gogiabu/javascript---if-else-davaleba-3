import React from 'react';
import ReactDOM from 'react-dom/client';

const x = 20;
const y = 10
let shedegi = x > y;
if (x > y) {
  shedegi = x;
}
else{
  shedegi = y;
}

const myElement = <h1>{shedegi}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
