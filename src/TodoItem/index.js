import React from "react";
import './TodoItem.css';

function TodoItem(props){

    const onComplete = () =>{
        alert('Ya completaste el todo ' + props.text)
    }

    const onDelete = () =>{
        alert('Borraste el todo ' + props.text)
    }
    //`Icon Icon-check ${props.completed && 'Icon-check--active'}`
    //combina texto con variables de JS
    //ademas de la clase Icon Icon-check que usamos en CSS --> Cuando nuestro componente
    //recibe una propiedad 'completed' props.completed y es true, entonces se agrega laclase
    //Icon-check--active de CSS, es como una condicional
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                  onClick = {props.onComplete}
            >
            √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
                >
                X
            </span>
        </li>
    );
}

export { TodoItem };