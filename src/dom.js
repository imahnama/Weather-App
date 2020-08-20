// import getWeather from './weather'
const mainPage = () => {

  const mainSection = document.createElement('div')
  mainSection.setAttribute('id', 'main-section')

  const mainDiv = document.createElement('div')
  mainDiv.setAttribute('id', 'input')

  mainSection.appendChild(mainDiv)

  const searchInput = document.createElement('input')
  mainDiv.appendChild(searchInput)
  searchInput.type = 'text'
  searchInput.setAttribute('placeholder', 'Search City');
  searchInput.setAttribute('class', 'inputValue')

  const searchSubmit = document.createElement('i')
  mainDiv.appendChild(searchSubmit)
  searchSubmit.type = 'submit'
  searchSubmit.setAttribute('class', 'fas fa-search p-2 ml-2 border city-search')

  const contentDiv = document.createElement('div')
  contentDiv.setAttribute('class', 'main-content mt-5')
  mainSection.appendChild(contentDiv)

  const cityName = document.createElement('h1')
  cityName.setAttribute('class', 'heading')

  contentDiv.appendChild(cityName)

  const cityDesc = document.createElement('p')
  cityDesc.setAttribute('class', 'content-desc')
  contentDiv.appendChild(cityDesc)

  const cityTemp = document.createElement('p')
  cityTemp.setAttribute('class', 'city-temp')
  contentDiv.appendChild(cityTemp)

  const minTemp = document.createElement('p')
  minTemp.setAttribute('class', 'min-temp')
  contentDiv.appendChild(minTemp)

  const maxTemp = document.createElement('p')
  maxTemp.setAttribute('class', 'max-temp')
  contentDiv.appendChild(maxTemp)



  const toggleTemp = document.createElement('button')
  toggleTemp.setAttribute('class', 'btn btn-warning toggle-temp')
  contentDiv.appendChild(toggleTemp)

  toggleTemp.innerHTML = 'Toggle Temperature'

  const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&appid=b4798b30d3b96afc9bb209e0110b6378&units=imperial'

  fetch('weatherApi', {mode: 'cors'})
    .then(response => response.json())
    .then((data) => responseData = data)

    console.log(responseData)



  // const getWeather = async () => {
  //
  //
  //
  //       const nameValue = data['name']
  //       const tempValue = data['main']['temp']
  //       const descValue = data['weather'][0]['description']
  //       const minTempValue = data['main']['temp_min']
  //       const maxTempValue = data['main']['temp_max']
  //
  //       // test(tempValue)
  //
  //       cityName.innerHTML = nameValue
  //       cityDesc.innerHTML = 'Desc:' + ' ' + descValue
  //       cityTemp.innerHTML = 'Temp:' + ' ' + tempValue
  //       minTemp.innerHTML = 'Min-Temp:' + ' ' + minTempValue
  //       maxTemp.innerHTML = 'Max-Temp:' + ' ' + maxTempValue
  //     })
  //
  //     const test = () => {
  //
  //       let tempInCelsious = (value - 32) * 5 / 9
  //       let tempInFareinheit = (tempInCelsious * 9/5) + 32
  //
  // }

  searchSubmit.addEventListener('click', getWeather)


  //   }

    // toggleTemp.addEventListener('click', )

  return mainSection
}

export default mainPage;
