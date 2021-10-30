import React , { useState } from 'react'
import Form from "./form"
import Cardsections from "./cardsections"

const Mainpage =( ) => {


  const [todo , setTodo] = useState(
    {
      todoname: "",
      description: "",
      category: "To be done"      
    }
  );
  const [ todos , setTodos ] =useState([])

  return (
    <div className="min-w-full" >
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <Cardsections todos={todos} setTodos={setTodos} />
      {console.log(todos)}
    </div>
    );

}

export default Mainpage;

