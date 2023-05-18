import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const username = sessionStorage.getItem('username')

     let [data, setData] = useState([])
     var [loading, setLoading] = useState(true)

     let navigate = useNavigate();   



     React.useEffect(() => {
        let USER_URL = `https://may-fhl-azure-app.azurewebsites.net/api/specific/${username}`

        axios.get(USER_URL)
            .then(response => {
                //setData(JSON.stringify(response.data))
                console.log("Data retrieved: " + JSON.stringify(response.data))
                let data = JSON.stringify(response.data)
                console.log(data)
                setData(JSON.parse(data))
                setLoading(false)
                
            })
            .catch(error => console.error(`Error: ${error}`));
    }, [username]);

    const navigateToDashboard = () => {
        navigate('/')
    }

    const navigateToScan = () => {
        navigate('/scanning')
    }

     
    return (
        <div>
            <h1>{loading ? "" : `Profile Page`}</h1>

            <div className="inventory-list">
                <span><strong>{loading ? "" : "First Name: "}</strong>{loading ? "" : `${data.firstName}`}</span> <br></br>
                <span><strong>{loading ? "" : "Last Name: "}</strong>{loading ? "" : `${data.lastName}`}</span> <br></br><br></br>
                <span><strong>{loading ? "" : "Username: "}</strong>{loading ? "" : `${data.username}`}</span> <br></br>
                <span><strong>{loading ? "" : "Email: "}</strong>{loading ? "" : `${data.email}`}</span> <br></br>
            </div>
            <div style={{justifyItems: 'center', margin: 'auto', textAlign: 'center'}}>
                <p style={{textAlign: 'center'}}>Want to add items? Navigate to your dashboard to see what else you want to add or directly scan a receipt.</p>
                <button class="button-1" onClick={navigateToDashboard} >Dashboard</button> <button class="button-3" onClick={navigateToScan}>Scan Receipt</button>
            </div>
        </div>
    );
    
    
}

export default Profile;