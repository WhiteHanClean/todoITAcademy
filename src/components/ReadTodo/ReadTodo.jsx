import React, {useState} from 'react';

const ReadTodo = ({array, setArray, modal, setModal}) => {


    function deleteArray(id){
        const endArray = array.filter( todo => todo.id !== id)
        setArray(endArray)
    }
    return (
        <div>
            {
                array.map(todo => {
                    return (
                        <div>
                            <h1>{todo.name}</h1>
                            <h2>{todo.desc}</h2>
                            <button onClick={() => deleteArray(todo.id)}>delete</button>
                            <button onClick={()=> setModal(!modal)}>edit</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ReadTodo;