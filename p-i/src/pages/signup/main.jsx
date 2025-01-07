import React, { useState } from 'react'
import { MainContainer } from './style'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../component/auth/firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const userData = {
                        email: email,
                        firstname: fname,
                        lastname: lname,
                    }
                    const docRef = doc(db, 'users', user.uid)
                    // eslint-disable-next-line no-undef
                    setDoc(docRef, userData)
                    toast.success("Signup successful!");
                    navigate("/");
                });
        } catch (error) {
            toast.error(`Signup failed: ${error.message}`);
        }
    };
    return (
        <MainContainer>
             <ToastContainer />
            <div>
                <div>
                    <h1>Create your Account</h1>
                </div>
                <div >
                    <form className='user_login' > 
                        <div className='sign_up_message'>

                        </div>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email Address' />
                        <input type='text' value={fname} onChange={(e) => setFname(e.target.value)} required placeholder='First Name' />
                        <input type='text' value={lname} onChange={(e) => setLname(e.target.value)} required placeholder='Last Name' />
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password' />
                        <input onClick={handleSignup} type='submit' value={'Signup'} />
                    </form>
                </div>
                <div >
                    <div className='signup_link'>
                        <span>Have Account ?</span>
                        <a href='/'>Sign In</a>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default Signup