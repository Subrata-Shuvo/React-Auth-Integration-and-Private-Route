import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvidder = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const signinUsingGoogle =()=>{
        signInWithPopup(auth, googleProvidder)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)            
        })
        .catch(error =>{
            setError(error.message);
        })
   }
   const signInUsingGitHub = () =>{
       signInWithPopup(auth, gitHubProvider)
       .then(result=>{
           setUser(result.user)
       })
   }

   const logOut = () =>{
    signOut(auth)
    .then(()=>{
        setUser({})
    })
   }

   useEffect(()=>{
       onAuthStateChanged(auth,  user=>{
           if(user){
               setUser(user);
           }
       })
   },[])

   return{
       user,
       error,
       signinUsingGoogle,
       signInUsingGitHub,
       logOut
       
   }
}

export default useFirebase;