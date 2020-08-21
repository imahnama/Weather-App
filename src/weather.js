/* eslint-disable no-use-before-define */
/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import mainPage from './dom';

const getWeatherData = () => {
  const getWeather = async (value) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b4798b30d3b96afc9bb209e0110b6378&units=imperial`, {
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        const {
          name,
          main: {
            temp,
            temp_min,
            temp_max,
            icon,
          },
        } = data;
        const nameValue = name;
        const tempValue = temp;
        const descValue = data.weather[0].description;
        const imgIcon = data.weather[0].icon;

        const imgUrl = `http://openweathermap.org/img/w/${imgIcon}.png`;
        const minTempValue = temp_min;
        const maxTempValue = temp_max;

        test(tempValue);

        document.getElementById('main-content').classList.remove('hide-menu');

        document.querySelector('.heading').innerHTML = nameValue;
        document.querySelector('.content-desc').innerHTML = `${'Desc:' + ' '}${descValue}`;
        document.querySelector('.image').setAttribute('src', imgUrl);
        document.querySelector('.city-temp').innerHTML = `${'Temp:' + ' '}${tempValue}`;
        document.querySelector('.min-temp').innerHTML = `${'Temp:' + ' '}${minTempValue}`;
        document.querySelector('.max-temp').innerHTML = `${'Temp:' + ' '}${maxTempValue}`;
      });
  };

  let newValue = true;

  const test = (value) => {
    document.querySelector('.toggle-temp').addEventListener('click', () => {
      const tempInCelsious = (value - 32) * (5 / 9);
      const tempInFareinheit = (tempInCelsious * (9 / 5)) + 32;

      if (!newValue) {
        document.querySelector('.city-temp').innerHTML = `${'Temp:' + ' '}${tempInFareinheit.toFixed(2)}`;
        newValue = !newValue;
      } else {
        document.querySelector('.city-temp').innerHTML = `${'Temp:' + ' '}${tempInCelsious.toFixed(2)}`;
        newValue = !newValue;
      }
    });
  };

  return { getWeather, test };
};

export default getWeatherData;
