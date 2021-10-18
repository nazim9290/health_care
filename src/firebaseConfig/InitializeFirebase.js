import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
const InitializeFirebase=()=>{
    return  initializeApp(firebaseConfig);
}
export default InitializeFirebase;