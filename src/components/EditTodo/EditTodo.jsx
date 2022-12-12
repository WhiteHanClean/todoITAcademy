import React from 'react';
import s from './edit.module.scss'

const EditTodo = ({modal, setModal}) => {
    return (
        <div className={modal == true ? s.modal_active : s.modal} onClick={()=>setModal(!modal)}>

            <div className={s.modal_text}>
                asdasdasd
            </div>

        </div>
    );
};

export default EditTodo;