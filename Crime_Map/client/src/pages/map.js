import React, { useState, useEffect } from "react";
import Axios from "axios"
import Geocode from "react-geocode"
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import Assaut from "./image/Assaut.png"
import Battery from "./image/Battery.png"
import Child from "./image/Child.png"
import Domestic from "./image/Domestic.png"
import Drug from "./image/Drug.png"
import Drunk from "./image/Drunk.png"
import Other from "./image/Other.png"
import Robbery from "./image/Robbery.png"
import Theft from "./image/Theft.png"
import Traffic from "./image/Traffic.png"
import Bulglary from "./image/Bulglary.png"



function Map() {
    const Crime_Type = {
      "Assault": Assaut,
      "Battery": Battery,
      "Child Abuse": Child,
      "Domestic": Domestic,
      "Drugs Criminal": Drug,
      "Drinking underage": Drunk,
      "Sexual Assault": Other,
      "Robbery": Robbery,
      "Theft": Theft,
      "Traffic Violation": Traffic,
      "Bulglary": Bulglary,
      "Obstruction of Justice": Other,
      "Disorderly Conduct": Other,
      "Misdemeanor": Other,
      "Deceptive": Other,
      "Felony": Other,
      "Rape or attempt to rape": Other
    }
    var myicon
    const [CrimeType, setCrimeType] = useState("")
    const [CrimeList, setCrimeList] = useState([])
    const [ActiveMarker, setActiveMarker] = useState(null);
    const [markers, setMarkers] = useState([
        {
          id: -3,
          name: "Chicago, Illinois",
          position: { lat: 41.881832, lng: -87.623177 },
          icon: Other
        },
        {
          id: -2,
          name: "Denver, Colorado",
          position: { lat: 39.739235, lng: -104.99025 },
          icon: Other
        },
        {
          id: -1,
          name: "Los Angeles, California",
          position: { lat: 34.052235, lng: -118.243683 },
          icon: Other
        },
        {
          id: -4,
          name: "New York, New York",
          position: { lat: 40.712776, lng: -74.005974 },
          icon: Other
        }
      ])
    const getCrimemap = async () => { 
        await Axios.get('http://localhost:3001/crimemap').then(response => {
            const data = response.data
            if (data.length !== 0) {
                console.log(data)
                setCrimeList(response.data)
                console.log(CrimeList)
            }
        })
    }
    useEffect(() => {
        getCrimemap();
    }, [])
    console.log(CrimeList)
    console.log(CrimeList.length)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyALsfUA4fSmu_SdOdCJaG3oCv8IlXSthyQ" // Add your API key
      });

    const handleActiveMarker = (marker) => {
        if (marker === ActiveMarker) {
        return;
        }
        setActiveMarker(marker);
    };
    Geocode.setApiKey("AIzaSyALsfUA4fSmu_SdOdCJaG3oCv8IlXSthyQ") 
    const Getcoordinate = async () => {
      var i
      for (i = 0; i < CrimeList.length; i++){
        console.log(CrimeList[i].Address)
        await Geocode.fromAddress(CrimeList[i].Address).then(
            (response) => {
                console.log(response.results[0].geometry.location)
                const { lat, lng } = response.results[0].geometry.location;
                const myobject = {id: i,
                                name: CrimeList[i].Description,
                                position: {lat: lat, lng: lng},
                                myicon: Crime_Type[CrimeList[i].CrimeType]}
                console.log(myobject)
                setMarkers(markers => [...markers, myobject])
            },
            (error) => {
                console.error(error)
            }
        )
      }
    }
    useEffect(() => {
      Getcoordinate();
    }, [CrimeList])
    console.log(markers)

  return (isLoaded && (
        <>
        <GoogleMap
            zoom={15} 
            center={{lat:40.10997, lng: -88.22709}}  
            mapContainerClassName="map-container"
        >
        {markers.map(({ id, name, position, myicon }) => (
            <Marker
            key={id}
            position={position}
            options={{
              icon: {url: myicon, scaledSize: new window.google.maps.Size(50, 50)}
            }}
            onClick={() => handleActiveMarker(id)}
            >
            {ActiveMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
                </InfoWindow>
            ) : null}
            </Marker>
        ))}
        <Marker
          position={{lat:40.10997, lng: -88.22709}}  
          options={{icon: {url: Drunk, scaledSize: new window.google.maps.Size(60, 60)}}}
        ></Marker>
        </GoogleMap>
        </>
    ));
}

export default Map;
