const InventoryList = ({itemName, dateAdded, expiryDate, quantity, daysLeft}) => {

    return (
        <div>
        <div >
            <span style={{margin: '0', display: 'inline', float: 'left'}}><strong>Item Name: </strong><span className='lightText'>{itemName}</span></span> 
            <span style={{margin: '0', display: 'inline', float: 'right'}}><strong>Days Left: </strong><span className='lightText'>{daysLeft}</span></span>
        </div>
        <br></br>
        <div >
            <span>Date Added: <span className='lightText'>{dateAdded}</span></span> <br></br>
            <span>Expiry Date: <span className='lightText'>{expiryDate}</span></span> <br></br>
            {/* <span><em>Quantity: <span className='lightText'>{quantity}</span></em></span><br></br> */}

            <hr></hr>
        </div>
        
        </div>

    )
}

export default InventoryList