import axios from "axios";
import React, { useState } from "react";
import InventoryList from "../components/InventoryList";


export default function Dashboard() {
    const [data, setData] = useState([])
    const [inventory, setInventory] = useState([])
    const [loading, setLoading] = useState(true)
    const username = sessionStorage.getItem('username')
    
    React.useEffect(() => {
        const USER_URL = `https://may-fhl-azure-app.azurewebsites.net/api/specific/${username}`
        const INVENTORY_URL = `https://may-fhl-azure-app.azurewebsites.net/api/inventory/${username}`

        axios.get(USER_URL)
            .then(response => {
                //setData(JSON.stringify(response.data))
                console.log("Data retrieved: " + JSON.stringify(response.data))
                let data = JSON.stringify(response.data)
                console.log(data)
                setData(JSON.parse(data))
                console.log(data.username)
            })
            .catch(error => console.error(`Error: ${error}`));

        axios.get(INVENTORY_URL)
        .then(response => {
            //setData(JSON.stringify(response.data))
            console.log("Data retrieved: " + JSON.stringify(response.data))
            let data = JSON.stringify(response.data)
            console.log(data)
            setInventory(JSON.parse(data))
            setLoading(false)
            
        })
        .catch(error => console.error(`Error: ${error}`));
    
    }, [username]);

    // const handleClick = () => {
    //     //setData(JSON.parse(data))
    //     console.log(JSON.parse(data))
    
    // }


    const insertItem = () => {
        
    }

    const displayItems = () => {
        const elements = []
        inventory.forEach(item => {
            var addedDate = new Date(Date.parse(item.dateAdded))
            var expiryDate = new Date(Date.parse(item.expiryDate))
            var diff = addedDate.getTime() - expiryDate.getTime()
            const oneDay = 1000 * 60 * 60 * 24;
            const days = Math.abs(Math.round(diff / oneDay))
            console.log("Days left: " + days)
            // this can be configured
            if (days < 10) {
                elements.push(
                    <InventoryList
                    itemName={item.item}
                    dateAdded={item.dateAdded}
                    expiryDate={item.expiryDate}
                    quantity={item.quantity}
                    daysLeft={days}
                    />
                )
            }
            
        });
        
        
        return elements
    }

    

    return (
        <main>
            <div>
                <h1>Dashboard</h1>
                {/* <button onClick={handleClick}>DEUBG: Click for users</button> */}
                <button onClick={insertItem}>Add item</button>
                <h1>{data.length === 0 ? "" : `Welcome ${data.firstName}!`  }</h1>
            </div>
            <div className="inventory-list">
                <h1>Expiring Soon</h1>
                {
                    loading ? '' : displayItems()
                } 
            </div>
            
    
        </main>
    );
}