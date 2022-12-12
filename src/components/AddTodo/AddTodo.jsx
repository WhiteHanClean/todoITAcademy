import React, { useState } from 'react';

const AddTodo = ({valueInputs,setValueInputs,array,  setArray}) => {

    function addToArray() {
        setArray([...array, {
            ...valueInputs,
            id: Date.now()
        }])
        console.log({
            ...valueInputs,
            id: Date.now()
        })
        setValueInputs({
            name: '',
            desc: '',
        })
    }

    return (
        <div>
            <input type="text" placeholder='name'
                value={valueInputs.name}
                onChange={(e) => setValueInputs({ ...valueInputs, name: e.target.value })}
            />
            <input type="text" placeholder='desciption'
                value={valueInputs.desc}
                onChange={(e) => setValueInputs({ ...valueInputs, desc: e.target.value })}
            />
            <button onClick={addToArray}>Add todo</button>


        </div>
    );
};

export default AddTodo;