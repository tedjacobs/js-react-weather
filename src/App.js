import React from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import Titles from './components/Titles';

const Api_Key = "15f7fdb47aa5b5cdfe330b630aa36a04"

class App extends React.Component {


  //Objects that keep track of changing data within this component
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // getWeather method to call api
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial `);
    const response = await api_call.json();
    console.log(response);
    if(city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please input valid city and country..."
      })
    }
  }
  
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                <Titles />
                </div>
                <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

