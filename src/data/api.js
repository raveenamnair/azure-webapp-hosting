//import React, {useState} from "react";
import axios from "axios";

//const [data, setData] = useState([])


export async function getAllUsers () {
    const URL = 'https://may-fhl-azure-app.azurewebsites.net/api/all-users'

    await axios.get(URL)
        .then(response => {
            //setData(JSON.stringify(response.data))
            console.log("Data retrieved: " + JSON.stringify(response.data))
            let data = JSON.stringify(response.data)
            console.log(data)
            return data
            //console.log(data[0].name)
        })
        .catch(error => console.error(`Error: ${error}`));

        // _callback(); 
        
}