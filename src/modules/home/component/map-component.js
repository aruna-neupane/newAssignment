import React, { Component } from 'react';
import map from './../../../assets/images/map.jpg'
// import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '400px',
  overflowX:'hidden',
  marginRight:0,
  marginBottom:0,
};

export class MapContainer extends Component {
  render() {
    //   const {long, lat} = this.props
    return (
      // <Map
      //   google={this.props.google}
      //   zoom={14}
      //   style={mapStyles}
      //   initialCenter={{
      //    lat: -1.2884,
      //    lng: 36.8233
      //   }}
      // />
      <div>
        <img src={map} alt="map" />
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDG45Nw-TnSc-MmCrvCjC3fuu5wCznAZ0Q'
// })(MapContainer);
export default MapContainer;