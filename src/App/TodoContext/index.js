import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
    
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
          saveTodos(newTodos);
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
        saveTodos(newTodos);
      }
    
    /*   console.log('render antes del useEffect')
    
      React.useEffect(()=>{
        console.log('use effect here!')
      },[totalTodos]);
    
      console.log('render luego del useEffect') */
    

    return(
        <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
