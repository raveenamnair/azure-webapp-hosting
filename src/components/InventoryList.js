const InventoryList = ({itemName, dateAdded, expiryDate, quantity, daysLeft}) => {

    return (
        <div >
            <span>Item Name: <span className='lightText'>{itemName}</span></span> <br></br>
            <span>Date Added: <span className='lightText'>{dateAdded}</span></span> <br></br>
            <span>Expiry Date: <span className='lightText'>{expiryDate}</span></span> <br></br>
            <span>Days Left: <span className='lightText'>{daysLeft}</span></span><br></br>
            <span>Quantity: <span className='lightText'>{quantity}</span></span><br></br>
            <hr></hr>
        </div>
        
    )
}

export default InventoryList