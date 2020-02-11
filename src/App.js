import React from "react";
import ToDoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <TodoForm />
        </div>

        <div>
          <h2>To do list:</h2>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
