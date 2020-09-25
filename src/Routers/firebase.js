
import 'firebase/firestore';
import 'firebase/auth';
import app from 'firebase/app';

const firebaseConfig={
    apiKey: "AIzaSyDRyzxDrCVKhgqs0vGUVOkwYoE9xj5X5H4",
    authDomain: "reparaya-25436.firebaseapp.com",
    databaseURL: "https://reparaya-25436.firebaseio.com",
    projectId: "reparaya-25436",
    storageBucket: "reparaya-25436.appspot.com",
    messagingSenderId: "222056952375",
    appId: "1:222056952375:web:36339a28dc1966e78e85b2"
};
app.initializeApp(firebaseConfig);
const dab=app.firestore()
const auth=app.auth()
export{dab,auth,app}