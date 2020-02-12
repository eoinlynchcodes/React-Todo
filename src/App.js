import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";
import uuid from "uuid";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      listItem: "",
      todoList: Todo
    };
  }



  addToList = event => {
    event.preventDefault();
    const newToDoItem = {
      task: this.state.listItem,
      id: uuid(),
      completed: false
    };
    this.setState({todoList: [...this.state.todoList, newToDoItem]});
    this.setState({listItem: ''})
  };

  changeHandler = event => {
    this.setState({ listItem: event.target.value });
    console.log(this.state.listItem);
  };

  toDoComplete = (id) => {
    this.state.todoList.map((item, key) => {
      if(id === item.id){
        return {
          ...item,
          completed: true
        }
      }
    })
  }

  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <div>
          <form>
            <h2>Add ToDo List Items here:</h2>
            <input
              placeholder="ToDoItem"
              value={this.state.listItem}
              onChange={this.changeHandler}
            />
            <button onClick={this.addToList}>Add</button>
            <button>Clear List</button>
          </form>
        </div>

        <div>
          <h2>To do list:</h2>
          <TodoList toDoListData={this.state.todoList}/>
        </div>
      </div>
    );
  }
}

export default App;
