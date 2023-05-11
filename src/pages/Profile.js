import React, {useState} from "react";
import axios from "axios";

const Profile = () => {
    const username = sessionStorage.getItem('username')


     let [data, setData] = useState([])
     var [loading, setLoading] = useState(true)


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

     

  

        return (

            <main>
                {/* <h1>We are on the Profile Page Now</h1>
                <button onClick={getUser} type='button'>Click Me For Data</button> */}
                <h1>{loading ? "" : `Welcome ${data.firstName}`}</h1>
            </main>
        );
    
    
}

export default Profile;