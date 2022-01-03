import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDD1xOJGOa6Spmg9BM-G6vNtPGplNnA7w",
    authDomain: "bosch-team-ecommerce.firebaseapp.com",
    projectId: "bosch-team-ecommerce",
    storageBucket: "bosch-team-ecommerce.appspot.com",
    messagingSenderId: "1029151426960",
    appId: "1:1029151426960:web:139e8156f11d8f48aacb15"
  };

  const app = initializeApp(firebaseConfig)

  export const DataBase = getFirestore(app)