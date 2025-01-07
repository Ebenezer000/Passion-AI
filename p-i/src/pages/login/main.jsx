import { useState } from 'react'
import { MainContainer } from './style'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../component/auth/firebase";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // console.log('hello')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('loggedInUser',user.uid)
                toast.success("Login successful! Redirecting to dashboard...");
                navigate("/dashboard");
            });
        } catch (error) {
            toast.error(`Wrong Email or Password`);
        }
    };

    return (
        <MainContainer>
            <div>
                <div>
                    <h1>Welcome to PassionAi</h1>
                </div>
                <div >
                    <form className='user_login'>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email Address' />
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                        <input onClick={handleLogin} type='submit' value={'Login'} />
                    </form>
                </div>
                <div >
                    <div className='signup_link'>
                        <span>Don't have an account</span>
                        <a href='/signup'>Sign up</a>
                    </div>
                </div>
            </div>
            <ToastContainer/>   
        </MainContainer>
    )
}

export default Login