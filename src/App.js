import React, {useState} from "react";
import ToDoList from "./ToDoList";

const App = () => {

    const [inputList, setInputList] = useState("");

    const [items, setItems] = useState([]);

    const inputHandler = (e) => {
        return(
         setInputList(e.target.value)
        )
    }
    const itemHandler = () => {
          setItems((oldItems) => {
              return [...oldItems, inputList]
          })
          setInputList("");
    }
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrItems,index) => {
                return index !== id;
            });
        })
    }
    return(
        <div className="main_div">
          <div className="center_div">
            <h1>Todo List App</h1>
            <input type="text" placeholder="Add a Todo" onChange={inputHandler} value={inputList}/>
            <button onClick={itemHandler}>+</button>
            <ul>
            {items.map((item, index) => {
                return(
                    <ToDoList key={index} id={index} text={item} onSelect={deleteItems}/>  
                )
            })}
            </ul>
          </div>
        </div>
    )
}

export default App;