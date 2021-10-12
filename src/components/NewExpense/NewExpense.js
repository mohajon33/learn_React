import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpenseHandler(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseFrom onSaveExpenseData = {saveExpenseData}/>
    </div>
  );
};

export default NewExpense;
