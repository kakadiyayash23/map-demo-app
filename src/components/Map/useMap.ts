import mapboxgl from "mapbox-gl"; // Import the Mapbox GL library.
import { useState } from "react"; // Import the "useState" hook from React.
import { addQuest } from "../../services/quest"; // Import a function to add quests from a service module.

function useMap() {
  // Create state to manage marker positions and session ID.
  const [markersPosition, setMarkersPosition] = useState<mapboxgl.LngLat[]>([]);
  const [sessionId] = useState(new Date().getTime()); // Generate a unique session ID.

  // Define a function to handle map clicks, and add markers and quests.
  const handleMapClick = async ({ lngLat }: mapboxgl.MapLayerMouseEvent) => {
    // Update the marker positions with the new click location.
    setMarkersPosition((prev) => [...prev, lngLat]);

    // Add a new quest using the "addQuest" function from the service.
    await addQuest({
      sessionId, // Pass the session ID generated earlier.
      questNumber: markersPosition.length + 1, // Calculate the quest number based on the number of markers.
      location: { ...lngLat }, // Store the location information of the quest.
    });
  };

  // Return the marker positions and the click handling function.
  return { markersPosition, handleMapClick };
}

export default useMap; // Export the "useMap" custom hook for use in other parts of your application.
