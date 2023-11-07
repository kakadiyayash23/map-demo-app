import { getAuth } from "firebase/auth"; // Import the Firebase Authentication module.
import { initializeApp } from "firebase/app"; // Import the Firebase App module for initialization.
import { getFirestore } from "firebase/firestore"; // Import the Firebase Firestore module.

// Define the Firebase configuration object with API keys and other settings.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_API_KEY, // Retrieve the API key from environment variables.
  authDomain: import.meta.env.VITE_PUBLIC_AUTH_DOMAIN, // Retrieve the authentication domain from environment variables.
  projectId: import.meta.env.VITE_PUBLIC_PROJECT_ID, // Retrieve the project ID from environment variables.
};

// Initialize the Firebase app with the provided configuration.
export const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database using the initialized Firebase app.
export const db = getFirestore(app);

// Get a reference to the Firebase Authentication instance using the initialized Firebase app.
export const auth = getAuth(app);

// Export the Firebase app, Firestore, and Authentication instances for use in your application.
