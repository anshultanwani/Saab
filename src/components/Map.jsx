import React, { Fragment } from "react";
import { useState } from "react";
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
    Circle
} from "react-google-maps";




const Map = props => {
    const [markerPos,upadtePos] = useState({
        ...props.marker
    })
    // state = {
    //     markerposition: defaultLocation,
    //     place: "Default Position - India"
    //   };

    // onMouseOverEvent = place => {
    //     this.setState({
    //       markerposition: { lat: place.lat, lng: place.lng },
    //       place: place.name
    //     });
    //   };

    return (

        < GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={props.center}


        >

            {
               

                        < Fragment key={'ew'} >

                            {/* {place.circle && <Circle
                                defaultCenter={{
                                    lat: parseFloat(place.latitude),
                                    lng: parseFloat(place.longitude)
                                }}
                                radius={place.circle.radius}
                                options={place.circle.options}
                            />
                            } */}
                            {props.marker?<Marker onDragEnd={pl => {
                                const {latLng} = pl;
                                upadtePos({
                                    lat: latLng.lat(),
                                    lng: latLng.lng()
                                })
                            }} draggable={true} position={{...markerPos}} />
                            : null}

                        </Fragment>
                }
            
        </GoogleMap >
    );
}

export default withScriptjs(withGoogleMap(Map));

// position = {{ lat: 45.764288, lng: 21.209806 }}