import React from 'react'
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';


import { useAuth } from '../contexts/AuthContext';
 
const Chats = () => {
    const history = useHistory();
    const {user}= useAuth();
    console.log(user);

    const handleLogout = async()=> {
        await auth.signOut();

        history.push('/');



    }





    return (
        <div className= "chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    BEAM
                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    Logout
                </div>
                <div><ChatEngine
                 height= "calc(100vh -66px"
                 projectId ="1befc8d7-a36b-4246-a4d7-1144dac6a44a"
                 userName="."
                 userSecret="."
                 />
                 </div>

            </div>
            
            
        </div>
    )
}

export default Chats
