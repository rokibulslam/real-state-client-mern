import firebaseConfig from "./Firbase.config"
import { initializeApp } from "firebase/app";
// Initialize Firebase



const initializeFirebase = () => {
    return initializeApp(firebaseConfig)
    
}
export default initializeFirebase;