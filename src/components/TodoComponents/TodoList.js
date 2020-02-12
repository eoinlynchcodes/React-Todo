
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import './Todo.css';

const Border = styled.div`
border: 1px solid black;
`
  function TodoList(props){
      console.log(props.toDoListData);

      // Destructuring props...
      const { toDoListData } = props; 
    return(
        <Border>
            {
                toDoListData.map((item, key) => {
                    return <h3> {item.task} </h3>
                })
            }    
        </Border>
    )
  }

  export default TodoList;

