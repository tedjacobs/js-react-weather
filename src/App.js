import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const Api_Key = "15f7fdb47aa5b5cdfe330b630aa36a04"

class App extends React.Component {

  // getWeather method to call api
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=louisville,ky&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);
  }
  
  render() {
    return(
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather />  
      </div>
    )
  }
}

export default App;

