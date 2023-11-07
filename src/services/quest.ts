import { Timestamp, addDoc, collection } from "firebase/firestore"; // Import necessary Firebase Firestore functions.
import { db } from "../firebase/firebabse.config"; // Import the Firestore database reference from your Firebase configuration.

// Define a TypeScript type for the data you want to add to Firestore.
type addQuest = {
  sessionId: number; // Unique session ID for the quest.
  location: { lat: number; lng: number }; // Latitude and longitude of the quest.
  questNumber: number; // Quest number within the session.
};

// Create a function to add a quest to Firestore using the provided data.
const addQuest = ({ sessionId, location, questNumber }: addQuest) =>
  addDoc(
    collection(db, `Quests/session-${sessionId}/Quest ${questNumber}`), // Define the Firestore collection path.
    {
      Location: { ...location }, // Store the quest location.
      Timestamp: Timestamp.now(), // Capture the current timestamp.
    }
  );

// Export the "addQuest" function for use in other parts of your application.
export { addQuest };
