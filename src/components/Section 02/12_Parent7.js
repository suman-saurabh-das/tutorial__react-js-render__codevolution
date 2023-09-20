/* [13] useMemo & useCallback */

import React, { useState } from 'react'
// import { useMemo } from 'react';
import { useCallback } from 'react';
import { MemoisedChild7 } from './12_Child7';

function Parent7() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Suman")
  console.log('Parent 7 rendered');

  // const person = {
  //   fName: 'Tony',
  //   lName: 'Stark'
  // }
  // const memoisedPerson = useMemo(() => person, [])

  const clickHandler = () => { alert("Holla") }
  const memoisedClickHandler = useCallback(clickHandler, [])

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count : {count}</button>
      <button onClick={() => setName("Saurabh")}>Name : {name}</button>
      {/* <MemoisedChild7 name={name} person={memoisedPerson} /> */}
      <MemoisedChild7 name={name} clickHandler={memoisedClickHandler} />
    </div>
  )
}

export default Parent7

/*
    We can use useMemo() and useCallback() hook to optimize the components which pass objects or functions as props to Memoized Child components.

    useMemo() accepts 2 parameters -
        Creator function - will create the person object which will be memoized.
        Dependency array
    useCallback() accepts 2 parameters -
        Accepts the function to be memoized as its first argument.
        Dependency array
*/
