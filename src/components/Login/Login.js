import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import logo from '../../images/logo3.png';
import './Login.css';

function Login() {

    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginToApp = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(
            userAuth =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL
                }))
            }
        ).catch(error => alert(error))
    }
    const register = ()=>{
        if(!name){
            return alert("Please provide full name")
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth)=>{
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(()=>{dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                    }))
                })
            }
        )
    }
    return (
        <div className="login">
            <img src={logo} alt=""/>
            <form>
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" />
                <input type="text" value={profilePic} onChange={e=>setProfilePic(e.target.value)} placeholder="Profile Pic Url" />
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
                <button onClick={loginToApp}>Sign In</button>
                <span>or</span>
            </form>
            <button onClick={register}>Sign Up</button>
            {/* <p>Not a member yet?{" "}
                <span className="login__register" onClick={register}>Sign Up</span>
            </p> */}
            
        </div>
    )
}

export default Login
