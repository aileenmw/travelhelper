import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import NavBar from "../NavBar";
import Titles from "../Weather/Titles";
import Form from "../Weather/Form";
import Weather from "../Weather/Weather";
import PageTitle from "./PageTitle";




const API_KEY = "6b690a0e05f02f8c69213a7f4c5e2f1a";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    image: undefined,
    error: undefined

  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Udfyld By og Land"
      })
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <PageTitle />
        <Container>
          <Row>
            <Col xs={12} md={{ size: 12, order: 1 }} lg={{ size: 6, order: 2 }}>
              <div id="slider"></div>
            </Col>
            <Col xs={12} md={{ size: 6, order: 2 }} lg={{ size: 3, order: 1 }}>
              <div id="weather">
                <div className="weather_div">
                  <Titles />
                  <Form getWeather={this.getWeather} />
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
            </Col>
            <Col xs={12} md={{ size: 6, order: 1 }} lg={{ size: 3, order: 3 }}>
              <div id="curency_converter"></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default App;