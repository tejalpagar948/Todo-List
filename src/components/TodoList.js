import React from 'react';
import '../output.css';

const TodoList = () => {
  return (
    <>
      <div className="todo-list-div bg-[#fff] w-5/12 m-auto rounded-[15px] max-w-[1000px] my-10 py-8 h-[508px]">
        <div className="wrapper w-10/12 mx-auto flex flex-col gap-7">
          <div className="todo-header flex gap-2.5 items-center ">
            <h1 className="text-[#2a1560] text-2xl font-bold before:content">
              To-do List
            </h1>
            <img src="check-list.png" className="h-6" />
          </div>
          <div className="list relative w-full bg-[#edeef0] rounded-full">
            <input
              type="textarea"
              id="add-task"
              placeholder="Add your task"
              className="py-5 px-5 w-9/12 outline-none bg-[#edeef0] rounded-full"
            />
            <span className="text-[#fff] bg-[#ff5845] py-5 px-10 rounded-full absolute top-0 right-0 font-bold">
              ADD
            </span>
          </div>
          <div className="todos py-2.5 pr-2 pl-0.5">
            <ul className="flex flex-col gap-3.5">
              <li className="flex justify-between todo-item">
                <div className="list-div flex gap-3">
                  <span
                    className="w-6.5 h-6.5 border-3 border-[#dbdcde]  rounded-full"
                    content=" "></span>
                  <p>Learn javascript</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <a href="#FIXME" className="edit-icon">
                    <img src="edit-icon.svg" />
                  </a>
                  <a href="#FIXME">
                    <img src="cross-svgrepo-com.svg" />
                  </a>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="list-div flex gap-3">
                  <span
                    className="w-6.5 h-6.5 border-3 border-[#dbdcde]  rounded-full"
                    content=" "></span>
                  <p>Learn javascript</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <a href="#FIXME">
                    <img src="edit-icon.svg" />
                  </a>
                  <a href="#FIXME">
                    <img src="cross-svgrepo-com.svg" />
                  </a>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="list-div flex gap-3">
                  <span
                    className="w-6.5 h-6.5 border-3 border-[#dbdcde]  rounded-full"
                    content=" "></span>
                  <p>Learn javascript</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <a href="#FIXME">
                    <img src="edit-icon.svg" />
                  </a>
                  <a href="#FIXME">
                    <img src="cross-svgrepo-com.svg" />
                  </a>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="list-div flex gap-3">
                  <span
                    className="w-6.5 h-6.5 border-3 border-[#dbdcde]  rounded-full"
                    content=" "></span>
                  <p>Learn javascript</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <a href="#FIXME">
                    <img src="edit-icon.svg" />
                  </a>
                  <a href="#FIXME">
                    <img src="cross-svgrepo-com.svg" />
                  </a>
                </div>
              </li>
              <li className="flex justify-between">
                <div className="list-div flex gap-3">
                  <span
                    className="w-6.5 h-6.5 border-3 border-[#dbdcde]  rounded-full"
                    content=" "></span>
                  <p>Learn javascript</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <a href="#FIXME">
                    <img src="edit-icon.svg" />
                  </a>
                  <a href="#FIXME">
                    <img src="cross-svgrepo-com.svg" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="w-full h-50 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-[#2a1560] text-center ">
              Please Your Add Todo List
            </h3>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TodoList;
