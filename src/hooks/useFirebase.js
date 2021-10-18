import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import InitializeFirebase from './../firebaseConfig/InitializeFirebase';


InitializeFirebase()

const useFirebase=()=>{
    const [user,setUser]=useState({})

    //provider
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    //auther
    const auth = getAuth();

    const loginwithpopup=(provider)=>{
        signInWithPopup(auth, provider)
        .then(result=>{
            const {displayName,email,photoURL}=result.user;
            const userInfo={
                name:displayName,
                email:email,
                img: photoURL
            }
            setUser(userInfo)
            console.log(userInfo);
        })
    }

    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }

      // observe whether user auth state changed or not
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        loginwithpopup,
        logOut,
        googleprovider,
        githubprovider,
        setUser
    }

}

export default useFirebase;
