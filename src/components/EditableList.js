import './EditableList.css'

const EditableList = ({itemName, status}) => {

    return (
        <div style={{'vertical-align': 'middle'}}>
            <div className={status ? "strike" : ""} >
                <p>{itemName}</p>
            </div>
        </div>
        
    )
}

export default EditableList
