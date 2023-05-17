import React from 'react';
import Tesseract from 'tesseract.js';
import EditableList from '../components/EditableList';
import axios from 'axios';

const Test = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [parsedItems, setParsedItems] = React.useState([])
  const [checked, setChecked] = React.useState([])
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);
  const [newItem, setNewItem] = React.useState("")

  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        console.log(m);
        if (m.status === 'recognizing text') {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
        alert("Receipt finished parsing")
      });
  };

  const displayEditList = () => {
    const list = []
     parsedItems.forEach(item => {
        
        list.push(
            <EditableList
            itemName={item}
            status={false}
            onChangeFunc={onChangeFunc}
        
            />
        )
    })
    return list
  }

  const onChangeFunc = (e) => {
    if (checked.includes(e)) {
        checked.pop(e)
    } else {
        checked.push(e)
    }
    console.log(checked)
  }

  const deleteItems = () => {
    checked.forEach(item => {
        parsedItems.pop(item)
    })
    setChecked([])
    forceUpdate();
    
  }

  

  const sendData = () => {
    axios.post('https://may-fhl-azure-app.azurewebsites.net/api/parse-inventory', {"name" : text})
    .then(res => {
        console.log(res.data)
        setParsedItems(res.data)
    })
    .catch(error => {
            console.log(error)
    })
  }

  const showTextInput = () => {
    return (
        <div>
            <br></br>
            <hr></hr>
            <div className='list'>
                <p>Check the box and press delete to remove an item</p> 
                <button onClick={deleteItems}>Delete</button>
            </div>
            <div className='list'>
                <label>Add Item:
                    <span>&nbsp;&nbsp;</span> 
                    <input type="text"  value={newItem} onChange={(e) => setNewItem(e.target.value)} /> 
                </label>
                <button onClick={addItem}>Submit</button> <span>&nbsp;&nbsp;</span> 
            </div>
        </div>
    ) 
  }

  const addItem = () => {
    parsedItems.push(newItem)
    setParsedItems(parsedItems)
    setNewItem("")
    forceUpdate()
    console.log(ignored)
  }

  const sendFinalList = () => {
    console.log(parsedItems.toString())
    axios.post('https://may-fhl-azure-app.azurewebsites.net/api/insert-items', {'item': parsedItems.toString(), 'username': sessionStorage.getItem('username')})
    .then(res => {
        console.log(res.data)
        alert("Items successfully added!")
    })
    .catch(error => {
            console.log(error)
    })
  }


  return (
    <div >
      <div >
        <div className='' >
          {!isLoading && (<h1>Upload A Receipt</h1> )}
          {isLoading && (
            <>
              <progress value={progress} max="100">
                {progress}%{' '}
              </progress>{' '}
              <p>Parsing:- {progress} %</p>
            </>
          )}
          {!isLoading && !text && (
            <>
              <input
                type="file"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control mt-5 mb-2"
              />
              <input
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary mt-5"
                value="Parse"
              />
            </>
          )}
        </div>
      </div>
      <br></br>
      <div>
        <div className={parsedItems.length > 0 ? 'inventory-list' : "instructions"}>
            {
                parsedItems.length > 0 ? displayEditList() : "Instructions: Click on the button \"Choose File\" to scan your grocery store receipt. After uploading, click \"Parse\" button"
            }
            {
                parsedItems.length > 0 ? showTextInput()  : ""
            }
          
        </div>
        <br></br>
          <button style={{margin: '10px'}} class="button-2"  onClick={sendData}>{'Preview List'}</button> 
          <button class="button-2"  onClick={sendFinalList}>Finalize List</button>
        

      </div>
    </div>
  );
};

export default Test;