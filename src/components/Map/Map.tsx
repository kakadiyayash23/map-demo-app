import Map, { Marker } from "react-map-gl"; // Import Map and Marker components from the "react-map-gl" library.
import "mapbox-gl/dist/mapbox-gl.css"; // Import the Mapbox CSS styles.
import useMap from "./useMap"; // Import a custom hook named "useMap" from a local file.
import "./map.css"; // Import custom CSS styles for your map component.

function MapBox() {
  // Use the "useMap" custom hook to get marker positions and click handling function.
  const { markersPosition, handleMapClick } = useMap();

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_PUBLIC_MAPBOX_ACCESS_TOKEN} // Provide your Mapbox access token.
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: "100vw", height: "100vh" }} // Set the map's width and height.
      mapStyle="mapbox://styles/mapbox/streets-v9" // Choose a map style from Mapbox.
      onClick={handleMapClick} // Handle map click events with the "handleMapClick" function.
    >
      {markersPosition.map((latLong, index) => (
        <Marker key={index} longitude={latLong.lng} latitude={latLong.lat}>
          <div className="marker-pin">
            <div className="marker-label">{index + 1}</div>
          </div>
        </Marker>
      ))}
    </Map>
  );
}

export default MapBox; // Export the MapBox component for use in other parts of your application.
