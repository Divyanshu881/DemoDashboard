// import React, { useState } from 'react';

// import './ExpenseForm.css';

// const ExpenseForm = (props) => {
//   const [enteredCourseName, setEnteredCourseName] = useState('');
//   const [enteredDuration, setEnteredDuration] = useState('');
//   const [enteredClass, setEnteredClass] = useState('');
//   const [enteredBoard, setEnteredBoard] = useState('');

//   const courseChangeHandler = (event) => {
//     setEnteredCourseName(event.target.value);
//   };

//   const durationChangeHandler = (event) => {
//     setEnteredDuration(event.target.value);
//   };

//   const classChangeHandler = (event) => {
//     setEnteredClass(event.target.value);
//   };

//   const boardChangeHandler = (event) => {
//     setEnteredBoard(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     const expenseData = {
//       courseName: enteredCourseName,
//       duration: enteredDuration,
//       class: enteredClass,
//       board: enteredBoard,
//     };

//     props.onSaveExpenseData(expenseData);
//     setEnteredCourseName('');
//     setEnteredDuration('');
//     setEnteredClass('');
//     setEnteredBoard('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className='new-expense__controls'>
//         <div className='new-expense__control'>
//           <label>Title</label>
//           <input
//             type='text'
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Amount</label>
//           <input
//             type='number'
//             min='0.01'
//             step='0.01'
//             value={enteredAmount}
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className='new-expense__control'>
//           <label>Date</label>
//           <input
//             type='date'
//             min='2019-01-01'
//             max='2022-12-31'
//             value={enteredDate}
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className='new-expense__actions'>
//         <button type='submit'>Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
