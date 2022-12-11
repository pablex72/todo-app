import React from 'react';
import { AppUI } from './AppUI'

// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();  
      const searchText = searchValue.toLowerCase();  
      return todoText.includes(searchText);
    })
    
  }

  //method to complete todo-->this function everytime that it receives a text 
  const completeTodo = (text) => {                                                           
    //examine line by line which ha the same text, so when we find it we get the position
      const todoIndex = todos.findIndex(todo => todo.text === text);
      
      const newTodos = [...todos];
      //2. way
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
      // 1. way: nuestros todos son unos objetos
      /* todos[todoIndex] = {
        text: todos[todoIndex].text,
        completed: true,
      } */
  }

  //method to eliminate todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}

     />
  );
}

export default App;