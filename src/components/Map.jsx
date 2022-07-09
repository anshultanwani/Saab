import axios from "axios";
import React, {  } from "react";
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
    Circle,
} from "react-google-maps";




const Map = props => {

    function getReverseGeocodingData(lat, lng) {
        axios.get('https://api.apple-mapkit.com/v1/reverseGeocode?lang=en-GB&loc'+lat+' '+lng).then(res => {
            if(res.data?.results?.length) {
                let result = res.data.results[0].components;
                let addStr = result.neighbourhood?result.neighbourhood:result.road+', '+result.city;
                props.setAddress(addStr);
            }
        })
        // var latlng = new window.google.maps.LatLng(lat, lng);
        // This is making the Geocode request
        // var geocoder = new window.google.maps.Geocoder();
        // geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
        //     if (status !== window.google.maps.GeocoderStatus.OK) {
        //         alert(status);
        //     }
        //     // This is checking to see if the Geoeode Status is OK before proceeding
        //     if (status == window.google.maps.GeocoderStatus.OK) {
        //         console.log(results);
        //         var address = (results[0].formatted_address);
        //     }
        // });
    }

    return (

        < GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={props.center}
        >          

                            {/* {place.circle && <Circle
                                defaultCenter={{
                                    lat: parseFloat(place.latitude),
                                    lng: parseFloat(place.longitude)
                                }}
                                radius={place.circle.radius}
                                options={place.circle.options}
                            />
                            } */}
                            <Marker
                                onDragEnd={pl => {
                                    const {latLng} = pl;
                                    let pos = {
                                        lat: latLng.lat(),
                                        lng: latLng.lng()
                                    }
                                    props.updateMarker({
                                        ...pos
                                    });
                                    getReverseGeocodingData(pos.lat,pos.lng)
                                }} 
                                draggable={true}
                                position={{...props.marker}} 
                            />
                            
                
            
        </GoogleMap >
    );
}

export default withScriptjs(withGoogleMap(Map));

// position = {{ lat: 45.764288, lng: 21.209806 }}