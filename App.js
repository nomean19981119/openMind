import { getApp, initializeApp } from 'firebase/app';
import firebaseConfig from './src/firebase/firebaseConfig';


try {
  initializeApp(firebaseConfig);
} catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!getApp.length) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

const app = initializeApp(firebaseConfig)

// console.log(app);

import Home from "./src/navigation/navigation";



export default function App() {
  return <Home />
}

