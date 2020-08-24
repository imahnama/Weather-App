/* eslint-disable import/no-cycle */
import getWeatherData from './weather';

const mainPage = () => {
  const mainSection = document.createElement('div');
  mainSection.setAttribute('id', 'main-section');

  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'input');

  mainSection.appendChild(mainDiv);

  const searchInput = document.createElement('input');
  mainDiv.appendChild(searchInput);
  searchInput.type = 'text';
  searchInput.setAttribute('placeholder', 'Search City');
  searchInput.setAttribute('class', 'inputValue');

  const searchSubmit = document.createElement('i');
  mainDiv.appendChild(searchSubmit);
  searchSubmit.type = 'submit';
  searchSubmit.setAttribute('class', 'fas fa-search p-2 ml-2 border city-search');

  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'mt-5 hide-menu');
  contentDiv.setAttribute('id', 'main-content');
  mainSection.appendChild(contentDiv);

  const cityName = document.createElement('h1');
  cityName.setAttribute('class', 'heading');

  contentDiv.appendChild(cityName);

  const cityDesc = document.createElement('p');
  cityDesc.setAttribute('class', 'content-desc');
  contentDiv.appendChild(cityDesc);

  const img = document.createElement('img');
  img.setAttribute('class', 'image');
  contentDiv.appendChild(img);

  const cityTemp = document.createElement('p');
  cityTemp.setAttribute('class', 'city-temp');
  contentDiv.appendChild(cityTemp);

  const minTemp = document.createElement('p');
  minTemp.setAttribute('class', 'min-temp');
  contentDiv.appendChild(minTemp);

  const maxTemp = document.createElement('p');
  maxTemp.setAttribute('class', 'max-temp');
  contentDiv.appendChild(maxTemp);


  const toggleTemp = document.createElement('button');
  toggleTemp.setAttribute('class', 'btn btn-warning toggle-temp');
  contentDiv.appendChild(toggleTemp);

  toggleTemp.innerHTML = 'Toggle Temperature';

  const getWeatherDataInstance = getWeatherData();

  searchSubmit.addEventListener('click', () => {
    getWeatherDataInstance.getWeather(searchInput.value);
  });


  return mainSection;
};

export default mainPage;
