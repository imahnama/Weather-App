import mainPage from './dom';
import getWeather from './weather';

const displayPages = () => {
   return mainPage();

};

document.querySelector('.content').appendChild(displayPages());
