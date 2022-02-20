import React,{useContext,useEffect, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { database } from '../firebase';
import UploadFile from './UploadFile';

function Feed(){
    const {user,logout}=useContext(AuthContext);
    console.log(user);
    const [userData,setUserData]=useState('')
    useEffect(()=>{
        const unsub=database.users.doc(user.uid).onSnapshot((snapshot)=>{
            console.log(unsub);
            setUserData(snapshot.data())
        })
        return (()=>{
            unsub()

        });
    },[user])
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div className="comp" style={{width:'50%'}} >

            <h1> Welcome to feed, {userData.fullname}</h1>

            <button onClick={logout}>log out</button>
            </div>
            <UploadFile user={userData}/>
        </div>
    )
}
export default Feed;