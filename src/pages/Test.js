import React from 'react';
import Tesseract from 'tesseract.js';
import { isEnglishWord } from "is-english-word";
import EditableList from '../components/EditableList';


const Test = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');
  const [progress, setProgress] = React.useState(0);
  const [parsedItems, setParsedItems] = React.useState([])

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
      });
  };

  const parseText = () => {
    const list = text.split("\n")
    console.log("33 " + list)
    var l = []
    list.forEach(item => {
        //console.log("Item: " + item)
        const word = item.split(" ")
        var food = ""
        word.forEach(element => {
            var check = isEnglishWord(element.toLowerCase())
            if (check && element.toLowerCase().length > 2) {
                //console.log("Checked: " + element.toLowerCase())
                food = food + " " + element.toLowerCase() 
            }
        })
        if (food.length > 0) {
            console.log("Final: " + food)
            l.push(food)
        }
    })
    if (l.length > 0) {
        setParsedItems(l)
    }
  }
  
  const displayEditList = () => {
    const list = []
    parsedItems.forEach(item => {
        list.push(
            <EditableList
            itemName={item}
            status={false}
            />
        )
    })
    return list
  }


  return (
    <div >
      <div >
        <div >
          {!isLoading && (<h1>Upload An Image</h1> )}
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
                value="Convert"
              />
            </>
          )}
          {!isLoading && text && (
            <>
              <textarea
                className="form-control w-100 mt-5"
                rows="30"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </>
          )}
        </div>
      </div>
      
      <div>
        <button onClick={parseText}>parse</button>
        {/* <p>{text}</p>
        <p>{parsedItems.toString()}</p> */}
        <div className={parsedItems.length > 0 ? 'inventory-list' : ""}>
            {
                parsedItems.length > 0 ? displayEditList() : ""
            }
        </div>
      </div>
    </div>
  );
};

export default Test;