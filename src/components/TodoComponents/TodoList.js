// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Border = styled.div`
border: 1px solid black;
`
  function TodoList(){

    return(
        <div>
            <Border>
            {
                Todo.map((item, key) => {
                    return <Border> {item.task} </Border>
                })
            }
            </Border>    
    
        </div>
    )
  }

  export default TodoList;

