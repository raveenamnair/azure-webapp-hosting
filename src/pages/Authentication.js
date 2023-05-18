import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Authentication() {
    let navigate = useNavigate();   
    const USER_URL = 'https://may-fhl-azure-app.azurewebsites.net/api/specific'

    // Variables 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([])

    React.useEffect(() => {
        axios.get(`${USER_URL}/${username}`)
             .then((response) => setData(response.data))
             .catch((error) => console.log(error.message))
    }, [username]);

    const handleLogout = () => {
        sessionStorage.removeItem("username")
        navigate("/")
    }

    const handleLogin = () => {
        console.log("Your password: " + password)
        console.log("Actual: " + data.password)
        if (data.password !== password) {
            alert("Incorrect username or password. Try again")
            setUsername("")
            setPassword("")
        } else {
            sessionStorage.setItem("username", username)
            alert("Logged in successfully!")
            navigate('/')
        }
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
        <main>
            <h1>Authentication</h1>
            <button className="button-3"  onClick={handleLogout}>Sign Out</button>
            <div className="login">
                <form >
                    <label>Username:
                    <span>&nbsp;&nbsp;</span> 
                        <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} /> 
                    </label>
                    <br></br> <br></br>
                    <label>Password:
                    <span>&nbsp;&nbsp;</span> 
                        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </form>
            <br></br>
            <br></br>
            <button className="button-3"  onClick={handleLogin}>Login</button>
            <p>Not registered? Just Sign up below</p>
            <button className="button-1"  onClick={handleSignUp}>Create Account</button>
            </div>
            
            
        </main>
    );
}