import React, {useEffect, useState} from "react";
import axios from "axios";

const Profile = () => {

     URL = 'https://may-fhl-azure-app.azurewebsites.net/api/get-users?code=FYFHgVR5f5XpqbNKNgaWEvOQChJQ9yUxZobRcqcr6B6GAzFuTPUunA=='

     let [name, setName] = useState("") 
     let [data, setData] = useState([])

     const getUser = () => {
        axios.get(URL)
        .then(response => {
            //setName(response.data)
            setData(response.data)
            console.log(response)
            // To get the first entry do [0] and then the fields of the document 
            // This works lmao
            console.log(data[0].name)
            setName(data[0].name)
        })
        .catch(error => console.error(`Error: ${error}`));
        
        console.log("hi " + name)

    }

  

        return (

            <main>
                <h1>We are on the Profile Page Now</h1>
                <button onClick={getUser} type='button'>Click Me For Data</button>
            </main>
        );
    
    
}

export default Profile;