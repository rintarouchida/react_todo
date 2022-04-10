import React, {useState} from 'react';
import './style.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  // inputを反映
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 「追加」を反映
  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }

  // 「削除」の反映
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  // 「完了」の反映
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newcompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  // 「戻す」の反映
  const onClickBack = (index) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setcompleteTodos(newcompleteTodos);
  }
  return(
    <React.Fragment>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}></input>
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div className="list-row" key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

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
    </React.Fragment>
  );
}
