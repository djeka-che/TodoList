import React from 'react';

function Main(props) {
    return (
        <main>
            {props.todos.map((todo, index) => {
                const todoClass = todo.favorite ? 'todo selected' : 'todo'
                return (

                    <div className={todoClass}>

                        <div className='favorite'>
                            <button onClick={() => props.makeFavorite(index)}>
                                <i className="fa fa-star" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className='todo-text'>
                            {todo.text}
                        </div>
                        <button onClick={() => props.deleteTodo(index)} className='delete'>
                            <i className="fa fa-times" aria-hidden="true"/>
                        </button>
                    </div>
                )
            })
            }
        </main>
    );
}

export default Main;