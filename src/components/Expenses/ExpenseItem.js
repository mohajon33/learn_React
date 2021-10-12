import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log(props.title)
  console.log("this will be excueted");

  const clickHandler = ()=>{
    setTitle('upadated');
    console.log(title)
    
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Price: ${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;