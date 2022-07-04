import React, { Component, useEffect, useState } from "react";
import Map from "./Map";
import './map.scss';

export default function MapContainer() {
    const [ marker, setMarker ] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ( location ) => setMarker({ 
               lat: location.coords.latitude,
               lng: location.coords.longitude
            })
        )
    }, [])

    return (
        <div className="map-holder">
            <Map
                marker = { marker }
                style={{ borderRadius: "25px" }}
                center={{ lat: marker?.lat || 28.6139, lng: marker?.lng || 77.2090 }}
                zoom={marker?.lat?18:10}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_6NDZYcE5HDyU9onLOGrsLN2kgW0QIn4"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `calc(100vh - 170px)` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />

        </div>
    );
}