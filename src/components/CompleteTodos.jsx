import React from 'react';

export const CompleteTodos = (props) => {
  const {completeTodos, onClickBack} = props;
  return (
    <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo,index) => {
            return (
              <div className="list-row" key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
    </div>
  );
}
