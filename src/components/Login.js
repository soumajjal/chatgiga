import React from "react";
import {GoogleOutlined, FacebookOutlined} from "@ant-design/icons";
import firebase from "firebase/compat/app";




import {auth} from "../firebase";

const Login =() => {

return(

  <div id = "login-page">
      <div id="login-card">
          <h1>WELCOME TO BEAM </h1>
       <div 
       
           className="login-button google"
            onClick={()=>firebase.auth(auth).signInWithRedirect(new firebase.auth.GoogleAuthProvider())  }
       >
           <GoogleOutlined/> Sign in with Google
           </div>
<br />
<br />

       <div className="login-button facebook"  
         
        onClick={()=>firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())  }
       
       >
           <FacebookOutlined/> Sign in with Facebook
           </div>
            






      </div>








  </div>  








)
}

export default Login;