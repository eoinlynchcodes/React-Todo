// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import uuid from 'uuid';


const TodoList = [
    {
        task: 'Svein\'s Site',
        id: uuid(),
        completed: false
    },
    {
        task: 'Fix Car Air Conditioning',
        id: uuid(),
        completed: false
    }
];

export default TodoList;