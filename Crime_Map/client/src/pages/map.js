import {useMemo} from "react"
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import "./page.css"

export default function Crime_Map(){

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyALsfUA4fSmu_SdOdCJaG3oCv8IlXSthyQ"
    })

    if (!isLoaded) return <div>Loading...</div>
    return <Map />;
}

function Map() {
    return <GoogleMap zoom={10} center={{lat:40.11, lng: -88.24}}  mapContainerClassName="map-container"></GoogleMap>
}