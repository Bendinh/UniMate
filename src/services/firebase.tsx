// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider} from "firebase/auth";
// import { get } from "firebase/database";
import { getFirestore, getDocs, getDoc,  collection, doc, query, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfqb1xTPc-lVeK8vN83F3wSh-9uka90_U",
  authDomain: "unimate-f1630.firebaseapp.com",
  projectId: "unimate-f1630",
  storageBucket: "unimate-f1630.appspot.com",
  messagingSenderId: "616679306573",
  appId: "1:616679306573:web:933d3d75892c34f001f304",
  measurementId: "G-B6MYKJY9P6"
};

// TODO: error handling

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const GGprovider = new GoogleAuthProvider();
const FBprovider = new FacebookAuthProvider();

export const list_mentors = async (filters: {topic?: string, major?: string, nationality?: string, school?: string} = {})=> {
    let q = query(collection(db, 'mentors'));

    if (filters.topic) {
      q = query(q, where("topics", "array-contains", filters.topic));
    }
    if (filters.major) {
      q = query(q, where("major", "==", filters.major));
    }
    if (filters.nationality) {
      q = query(q, where("nationality", "==", filters.nationality));
    }
    if (filters.school) {
      q = query(q, where("school", "==", filters.school));
    }

    const mentorsRef = await getDocs(q);
    const data = mentorsRef.docs.map(doc => ({id: doc.id, ... doc.data()}))
    return data
}

export {auth, GGprovider, FBprovider}
// TODO: upload new mentor
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const get_mentor = async(id: string) => {
  const mentorRef = doc(db, 'mentors', id);
  const mentor = await getDoc(mentorRef)

  return mentor.data()
  
}

