import React, {useState} from 'react';
import './style.css';
import {CompleteTodos} from './components/CompleteTodos';
import {InputTodo} from './components/InputTodo';
import {IncompleteTodos} from './components/IncompleteTodos';

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
      <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} disabled={incompleteTodos.length >= 5}/>
      {incompleteTodos.length >= 5 && (<p style={{color: 'red'}}>登録できるtodoは5個までです。</p>)}
      <IncompleteTodos incompleteTodos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack}/>
    </React.Fragment>
  );
}
