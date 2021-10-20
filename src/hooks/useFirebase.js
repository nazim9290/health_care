import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import InitializeFirebase from './../firebaseConfig/InitializeFirebase';


InitializeFirebase()

const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState("")
    const [isLoading, setIsLoading] = useState(true);

    //provider
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
   

    //auther
    const auth = getAuth();




    const googleLogin=(provider)=>{
        // setIsLoading(true);
        
      return  signInWithPopup(auth,provider)
        // .then(result=>{
        //     const {displayName,email,photoURL}=result.user;
        //     const userInfo={
        //         name:displayName,
        //         email:email,
        //         img: photoURL
        //     }
        //     setUser(userInfo)
        //     console.log(userInfo);
        // })
         .finally(() => setIsLoading(false));
    }

    // const githubLogin=()=>{
      
    //     signInWithPopup(auth, githubprovider)
    //     .then(result=>{
    //         const {displayName,email,photoURL}=result.user;
    //         const userInfo={
    //             name:displayName,
    //             email:email,
    //             img: photoURL
    //         }
    //         setUser(userInfo)
    //         console.log(userInfo);
    //     })
    //     .finally(() => setIsLoading(false));
    // }
    
    const logOut=()=>{
        setIsLoading(false);
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
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
      };
    
      const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
      };
    return {
        user,
        googleLogin,
        // githubLogin,
        googleprovider,
        githubprovider,
        logOut,
        setUser,
        isLoading,
        handleUserRegister,
        handleUserLogin,
        setIsLoading,
        error

    }

}

export default useFirebase;
