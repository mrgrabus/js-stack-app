import firebase from "firebase/app";
import "firebase/firestore";

// NAPOMENA: U stvarnom okruzenju ovaj config bi povlacio keyeve iz .env datoteke (process.env.API_KEY)
// ali da bi lakse bilo konfigurisati projekat drugoj strani, keyevi su direktno upisani
const firebaseConfig = {
  apiKey: "AIzaSyCtOTA3sEP2l0dp0vE61TAwCxQm0Vht_Ps",
  authDomain: "js-stack-app.firebaseapp.com",
  projectId: "js-stack-app",
  storageBucket: "js-stack-app.appspot.com",
  messagingSenderId: "788627565572",
  appId: "1:788627565572:web:8a269c6e9a9f2ab52b1951"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error(error);
}

export default firebase;
