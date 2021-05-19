import React from 'react';

function Section(props) {
    return (
        <section>
            <input
                placeholder='Введите текст...'
                type='text'
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
            />
            <button onClick={props.addTodo}>
                Добавить
            </button>
        </section>
    );
}

export default Section;