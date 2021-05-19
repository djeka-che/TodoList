import {useState} from "react";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";

function App() {
    const [todos, setTodos] = useState([])
    let [text, setText] = useState('');
    {
    }

    const deleteTodo = (indexOfRemovingItem) => {
        const filtered = todos.filter((todo, index) => {
            return index !== indexOfRemovingItem;
        });
        setTodos(filtered);
    }

    const makeFavorite = (i) => {
        const newTodos = todos.map((item, index) => {
            if (i === index) {
                return {
                    ...item,
                    favorite: !item.favorite
                };
            }
            return item
        })
        setTodos(newTodos);
    }

    const addTodo = () => {
        setTodos([
            {
                text: text,
                favorite: false
            },
            ...todos
        ]);
        setText('')
    }
    return (
        <div className="App">
            <Header/>
            <Section text={text} setText={setText} addTodo={addTodo}/>
            <Main todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
        </div>
    );

}

export default App;
