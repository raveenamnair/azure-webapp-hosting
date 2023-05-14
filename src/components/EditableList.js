import './EditableList.css'

const EditableList = ({itemName, status, onChangeFunc}) => {
   

    return (
        <div style={{'verticalAlign': 'middle'}}>
            <label>
                <input type="checkbox" value={itemName} onChange={(e) => onChangeFunc(e.target.value)}/>
                <span>{itemName}</span>
            </label>
        </div>
        
    )
}

export default EditableList
