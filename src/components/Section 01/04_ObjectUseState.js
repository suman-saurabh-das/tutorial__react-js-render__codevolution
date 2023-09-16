/* [05] State immutability */

import React, { useState } from 'react'

function ObjectUseState() {
  const initialState = {
    fName: 'Steve',
    lName: 'Rogers'
  }
  const [person, setPerson] = useState(initialState)
  const changeName = () => {
    // person.fName = 'Tony'
    // person.lName = 'Stark'
    // setPerson(person)

    const newPerson = { ...person }
    newPerson.fName = 'Tony'
    newPerson.lName = 'Stark'
    setPerson(newPerson)
  }
  console.log('ObjectUseState rendered');

  return (
    <div>
      <h4>{`${person.fName} ${person.lName}`}</h4>
      <button onClick={changeName}>Change name</button>
    </div>
  )
}

export default ObjectUseState

/*
    Mutating an object or an array directly as state will not cause a re-render when used with the useState or useReducer hook.
    To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.
    Directly mutating the state is an easy way to create bugs in your application and make sure that you don't do that.
*/
