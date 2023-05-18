import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [email, setEmail] = useState("");

    let navigate = useNavigate();

    const USER_URL = 'https://may-fhl-azure-app.azurewebsites.net/api/insert-user?code=6-VykZpQoWeVm3klLqCp_KGuCuEviLlkFnUobs5NV7w3AzFuOX4dug=='

    const handleSubmit = () => {
        if (password === repeatPassword && username.length > 0 && password.length > 0 && email.length > 0) {
            const data = {
                "username" : username,
                "firstName" : firstName,
                "lastName" : lastName,
                "password" : password,
                "email" : email
            }
    
            axios.post(USER_URL, data)
            .then(res => {
                console.log(res.data)
                alert("User added. Now Sign in")
                navigate('/authentication')
            })
            .catch(error => {
                    console.log(error)
            })

        }
        
    }

    const loginNavigate = () => {
        navigate('/authentication')
    }

    return (
        <main>
            <h1>Create Account</h1>
            <div className="login">
            <form>
            <label>
                First Name:
                <span>&nbsp;&nbsp;</span> 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label> <br/>
            <label>
                Last Name:
                <span>&nbsp;&nbsp;</span> 
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label> <br/>
            <br></br>
            <label>
                Username:
                <span>&nbsp;&nbsp;</span> 
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label> <br/>
            <label>
                Email:
                <span>&nbsp;&nbsp;</span> 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label> <br/>
            <br></br>

            <label>
                Password:
                <span>&nbsp;&nbsp;</span> 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label> <br/>
            <label>
                Repeat Password:
                <span>&nbsp;&nbsp;</span> 
                <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
            </label> <br/>
            </form>
            <br/> <button class="button-3" onClick={handleSubmit}>Create Account</button>
            <p>Already have an account? Login Here</p> <button class="button-1" onClick={loginNavigate}>Login</button>
            </div>
        </main>
    );
}