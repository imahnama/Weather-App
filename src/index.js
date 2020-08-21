import mainPage from './dom';
import getWeatherData from './weather';

const displayPages = () => {
  return mainPage();
  getWeatherData();
};

document.querySelector('.content').appendChild(displayPages());
