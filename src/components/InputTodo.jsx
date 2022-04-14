import React from 'react';

export const InputTodo = (props) => {
  const {todoText, onChangeTodoText, onClickAdd, disabled} = props;
  return (
    <div className="input-area">
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}></input>
      <button onClick={onClickAdd}>追加</button>
    </div>
  )
}
