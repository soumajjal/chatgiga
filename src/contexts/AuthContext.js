import React, {useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  // useEffect(() => {
    
    // const Auth = getAuth(firebase.auth(auth));
    onAuthStateChanged(firebase.auth.Auth, (user) => {
    setLoading(false)
    setUser(user);

      if (user) {
        history.push("/chats")
      } else {
         history.push("/")
      } 

  // firebase.auth().onAuthStateChanged(auth, (user) => {
  //   setUser(user);
  //   setLoading(false);
  //   if (user) history.push("/chats");

  // if (setUser(user===null)) {
  //   history.push("/");

  // } if (setUser(user !== null)) {
  //   history.push("/chats");
  // };
// });

 }, [user, history]);

 const value = {user};

 return(
 <AuthContext.Provider value = {value}>
     {!loading && children}
 </AuthContext.Provider>
 );

}