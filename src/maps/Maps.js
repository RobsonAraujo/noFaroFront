import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import iconYellowHouse from "../images/icon-casa-amarela-destaque.svg"
import SuspectBidding from "../biddingsIcons/SuspectBidding"
import Footer from "../footer/Footer"

import './Maps.scss';


class Maps extends Component {
  static defaultProps = {
    center: {
      lat: -23.553757,
      lng: -46.489845
    },
    zoom: 16
  };
  render() {
    return (

      <section className="main-maps">
      
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBTGaOYsm_d285YI1cCmVDXJhTE7H8A3lI" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <SuspectBidding
              lat={-23.553757}
              lng={-46.489845}
            />
          </GoogleMapReact>
        </div>
        <Footer page={"farejar"}/>
      </section>
    );
  }
}

export default Maps;
