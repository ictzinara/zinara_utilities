import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../App.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '80%',
};
class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    Tollgates: [],
      stores: [{lat: 17.2743, lng: 30.0416},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }
  componentDidMount() {// Changing the state after 2 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({ color: 'white' });
    }, 2000);
    this.apiGetTollgates();
  }
apiGetTollgates(){
      fetch("http://41.60.204.194:8082/api/tollgates")
      .then(response => response.json())
      .then((result) =>{
        
        console.log(result);
         if(result.length > 0){
           
            this.setState({
              Tollgates: result
            })
         }
      })
      .catch(error => console.log('error', error));
  }
  displayMarkers = () => {
    return this.state.Tollgates.map((toll, index) => {
      return <Marker key={index} id={index} label={""+ toll.name} position={{
       lat: -toll.lat,
       lng: toll.long
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: -17.8277, lng: 31.0534}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASFEIozS-cq6MMSSPSR0_54A8j6l8PyE0'
})(MapContainer);