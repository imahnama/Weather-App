import mainPage from './dom';

const displayPages = () => mainPage();

document.querySelector('.content').appendChild(displayPages());
