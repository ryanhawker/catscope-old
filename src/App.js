import React, {Component} from 'react';
//import logo from './logo.svg';
import cat from './cat.svg';
import './App.css';

import GoogleMap from 'google-map-react';
import GreatPlace from './great_place.js';
//var geolocation = require('geolocation')

const API_KEY="AIzaSyAZfGuwx6X-qLS0QdIJMhX0JVsgQi-jWWo"
export default class App extends Component {

  static defaultProps = {
    center: [-36, 174],
    zoom: 14,
  };

  constructor(props) {
    super(props);
    this.state = {
      center: [-36.861, 174.7618],
      zoom: 11,
      yourpos: [0, 0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position);
       self.setState ({
         center: [position.coords.latitude, position.coords.longitude],
         zoom: 15,
         yourpos: [position.coords.latitude, position.coords.longitude]
       });
    });
  }

  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event);

  render() {
    var center = this.state.center;
    var zoom = this.state.zoom;
    var yourlat = this.state.yourpos[0];
    var yourlng = this.state.yourpos[1];

    return (
      <div className="App">
        <div className="App-header">
          <img src={cat} className="App-logo" alt="logo" />
          <h2>Welcome to CatScope</h2>
        </div>
        <div onClick={this.handleClick}>
          <p className="App-intro">
            find cats in your area
          </p>
          <p>lat: {this.state.center[0]}, lng: {this.state.center[1]}</p>
        </div>
        <div id="map-container">
          <GoogleMap
            bootstrapURLKeys={{
              key: API_KEY
            }}
            onClick={this._onClick}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={center}
            zoom={zoom}>
            <GreatPlace lat={yourlat} lng={yourlng} text={'hi'} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}
