import React, { useState } from 'react';

const TodoItems = ({ addTodoItem, index, onDelete, onEdit }) => {
  const [conpleted, setCompleted] = useState(false);

  function checkBoxClick() {
    setCompleted((prev) => !prev);
  }

  return (
    <li className="flex justify-between todo-item">
      <div
        className={`list-div flex gap-4 items-center w-10/12 ${
          conpleted ? 'todo-complete' : ''
        }`}>
        <img
          src="check-mark.svg"
          className="p-1 border border-[3px] border-[#edeef0] rounded-full"
          onClick={checkBoxClick}
        />
        <p className="todo-item-para">{addTodoItem}</p>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="edit-div">
          <a href="#FIXME" className="edit-icon2" onClick={onEdit}>
            <img src="edit-icon.svg" className="" />
          </a>
        </div>
        <div className="delete-div">
          <a href="#FIXME" onClick={onDelete}>
            <img src="cross-svgrepo-com.svg" className="" />
          </a>
        </div>
      </div>
    </li>
  );
};

export default TodoItems;
