import React, { useState, useEffect } from 'react';
import '../output.css';
import TodoItems from './TodoItems';

const TodoList = () => {
  const [InputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [addButton, setAddButton] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [addTextBotton, setAddTextBotton] = useState('Add');

  const add = () => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((item, i) =>
        i === editIndex ? InputValue : item
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setAddTextBotton('Add');
    } else {
      setTodos([...todos, InputValue]);
    }

    setInputValue('');
    setAddButton(true);
  };

  const handleDelete = (itemToDelete) => {
    setTodos(todos.filter((todo) => todo !== itemToDelete));
  };

  const handleEdit = (todo, index) => {
    setInputValue(todo);
    setEditIndex(index);
    setAddTextBotton('Upadte');
  };

  return (
    <div
      className="todo-list-div bg-[#fff] w-full md:w-5/12 m-auto md:rounded-[15px] max-w-[1000px] md:my-10 py-8 min-h-[100vh] md:min-h-[508px] h-auto
      ">
      <div className="wrapper w-10/12 mx-auto flex flex-col gap-7 h-full">
        <div className="todo-header flex gap-2.5 items-center ">
          <h1 className="text-[#2a1560] text-2xl font-bold">To-do List</h1>
          <img src="check-list.png" className="h-6" />
        </div>

        <div className="list relative w-full bg-[#edeef0] rounded-full">
          <input
            type="textarea"
            placeholder="Add your task"
            className="py-5 px-5 w-9/12 outline-none bg-[#edeef0] rounded-full"
            value={InputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span
            className="text-[#fff] bg-[#ff5845] py-5 px-10 rounded-full absolute top-0 right-0 font-bold"
            onClick={add}>
            {addTextBotton}
          </span>
        </div>
        {todos.length !== 0 && (
          <div className="todos py-2.5 pr-2 pl-0.5">
            <ul className="flex flex-col gap-3.5">
              {addButton &&
                todos.map((todo, index) => (
                  <TodoItems
                    key={index}
                    addTodoItem={todo}
                    onDelete={() => handleDelete(todo)}
                    onEdit={() => handleEdit(todo, index)}
                  />
                ))}
            </ul>
          </div>
        )}
        {todos.length === 0 && (
          <div className="w-full h-full flex items-center justify-center min-h-[300px] md:pb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2a1560] text-center">
              Please Your Add Todo List
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
