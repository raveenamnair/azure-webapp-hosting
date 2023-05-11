import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../data/api";
import axios from "axios";


export default function Authentication() {
    let navigate = useNavigate();   

    // Variables 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([])

    // React.useEffect(() => {
    //    getAllUsers()
    //    setData(data)
    //   }, []);

    // const getUser =  () => {
    //     // let username = sessionStorage.getItem('username')
    //     console.log("calling...")
    //     // let data = await getAllUsers()
    //     // console.log("After function: " + data.find)
    //    await getAllUsers().then(res => console.log("Here: " + res)).catch(err => console.log(err)); 

        
    // }
     const getAllUsers = async () => {
        const URL = 'https://may-fhl-azure-app.azurewebsites.net/api/all-users'
    
        await axios.get(URL)
            .then(response => {
                //setData(JSON.stringify(response.data))
                console.log("Data retrieved: " + JSON.stringify(response.data))
                let data = JSON.stringify(response.data)
                console.log(data)
                setData(data)
                //console.log(data[0].name)
            })
            
            .catch(error => console.error(`Error: ${error}`));
    
            // _callback(); 
            
            
    }

    // const getUser = async () => {
    //     console.log("30")
    //     getAllUsers().then(result => {
    //         console.log(result);
    //       });
    //     //setUsername(res)
    //     console.log("32")
    //     console.log(username)
    // }

    const handleLogout = () => {
        sessionStorage.removeItem("username")
        navigate("/")
    }

    const handleLogin = () => {
        sessionStorage.setItem("username", username)
    }

    return (
        <main>
            <h1>Authentication</h1>

            <button onClick={getAllUsers}>Get All Users</button>

            <div className="login">
                <form onSubmit={handleLogin}>
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
            </div>
            
        </main>
    );
}