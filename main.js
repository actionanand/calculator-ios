import htmlContent from './src/calculator.html?raw';
import './src/style.css';
import { onSetUpCalculator } from './src/initial_setup.js';


document.querySelector('#app').innerHTML = htmlContent;

onSetUpCalculator();


// document.querySelector('#app').innerHTML = `
//   <div>
//     raw html content
//   </div>
// `
