import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Axios from "axios"
import './map.css';
import Geocode from "react-geocode"
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";

function Map() {
  const navigate = useNavigate();

  const navigateToAdvanced1 = () => {
    // 👇️ navigate to /contacts
    navigate('/advanced1');
  };

  const navigateToAdvanced2 = () => {
    // 👇️ navigate to /contacts
    navigate('/advanced2');
  };

    const [CrimeList, setCrimeList] = useState([])
    const [ActiveMarker, setActiveMarker] = useState(null);
    const [markers, setMarkers] = useState([
        {
          id: -3,
          name: "Chicago, Illinois",
          position: { lat: 41.881832, lng: -87.623177 }
        },
        {
          id: -2,
          name: "Denver, Colorado",
          position: { lat: 39.739235, lng: -104.99025 }
        },
        {
          id: -1,
          name: "Los Angeles, California",
          position: { lat: 34.052235, lng: -118.243683 }
        },
        {
          id: -4,
          name: "New York, New York",
          position: { lat: 40.712776, lng: -74.005974 }
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
                console.log(lat, lng)
                console.log(i)
                const myobject = {id: i,
                                name: CrimeList[i].Description,
                                position: {lat: lat, lng: lng}}
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
        <div className="container">
          <button 
            className="overlay1"
            onClick={navigateToAdvanced1}
          >
            Checkout all the Crimes on Two Streets
          </button>
          <button 
            className="overlay2"
            onClick={navigateToAdvanced2}
          >
            Discover the Most Dangerous Streets
          </button>
          <GoogleMap className="box"
              zoom={15} 
              center={{lat:40.10997, lng: -88.22709}}  
              mapContainerClassName="map-container"
          >
          {markers.map(({ id, name, position }) => (
              <Marker
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
              >
              {ActiveMarker === id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <div>{name}</div>
                  </InfoWindow>
              ) : null}
              </Marker>
          ))}
          </GoogleMap>
        </div>
        </>
    ));
}

export default Map;
