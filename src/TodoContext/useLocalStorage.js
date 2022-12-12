import React from 'react';

function useLocalStorage(itemName, initialValue){
    const[error,setError] = React.useState(false);
    const[loading,setLoading] = React.useState(true);
  
  //the initial state will be a string or array or object 
    const [item, setItem] = React.useState(initialValue);
  //the useEffect will envolve a code inside setTimeout; simula que se toma 1 sec en cargar
  //o when this passed it will call to setItem function to reresh the useState(initaialValue)
  //then it will delivery the true value that is in the localStorage
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        }catch(error){
            setError(error)
        }
      }, 1000);
    })
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }
      catch(error){
        setError(error)
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
  };
    
  }

  export{ useLocalStorage }