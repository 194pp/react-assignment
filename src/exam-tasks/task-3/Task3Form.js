import Task3FormInput from "./Task3FormInput";
import classes from './Task3.module.css';
import {useEffect, useState} from "react";

const Task3Form = ({errorsState, setErrorsState, setLoggedIn}) => {
  const [firstNameState, setFirstNameState] = useState('');
  const [lastNameState, setLastNameState] = useState('');
  const [ageState, setAgeState] = useState('');

  const inputChangeHandler = {
    firstName: (e) => {
      setFirstNameState(e.target.value);
    },
    lastName: (e) => {
      setLastNameState(e.target.value);
    },
    age: (e) => {
      const validate = validateInputHandler.age(e.target.value);
      if (validate.valid) {
        setAgeState(validate.value);
      }
    }
  }

  const validateInputHandler = {
    age: (val) => {
      if (val === '') {
        return {
          valid: true,
          value: val
        }
      }
      else if (val <= 0) {
        return {
          valid: false,
          msg: 'Age must be above 0'
        }
      }
      else {
        return {
          valid: true,
          value: val
        }
      }
    }
  }

  const validateSubmitHandler = {
    firstName: () => {
      if (firstNameState.trim() === '') {
        return 'Įveskite vardą.';
      }
      else return null;
    },
    lastName: () => {
      if (lastNameState.trim() === '') {
        return 'Įveskite pavardę.';
      }
      else return null;
    },
    age: () => {
      if (ageState.trim() === '') {
        return 'Įveskite amžių.';
      }
      if (ageState < 18) {
        return "Deja, registracija negalima";
      }
      else return null;
    },
    all: () => {
      let errors = [];
      if (validateSubmitHandler.firstName()) errors.push(validateSubmitHandler.firstName());
      if (validateSubmitHandler.lastName()) errors.push(validateSubmitHandler.lastName());
      if (validateSubmitHandler.age()) errors.push(validateSubmitHandler.age());
      setErrorsState(errors);
      if (errors.length === 0) {
        setFirstNameState('');
        setLastNameState('');
        setAgeState('');
        setLoggedIn(true);
      }
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    validateSubmitHandler.all();
  }

  return (
    <form className={classes.Form} onSubmit={submitHandler}>
      <Task3FormInput
        label='Vardas'
        type='text'
        value={firstNameState}
        change={inputChangeHandler.firstName}
      />
      <Task3FormInput
        label='Pavardė'
        type='text'
        value={lastNameState}
        change={inputChangeHandler.lastName}
      />
      <Task3FormInput
        label='Amžius'
        type='number'
        value={ageState}
        change={inputChangeHandler.age}
      />
      <button className={classes.SubmitBtn}>Pateikti</button>
    </form>
  )
}

export default Task3Form;