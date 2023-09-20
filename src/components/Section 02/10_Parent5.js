/* [11] Incorrect memo with impure component */

import React, { useState } from 'react'
import { MemoizedChild5 } from './10_Child5'

function Parent5() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Suman')
  console.log('Parent 5 rendered');

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count : {count}</button>
      <button onClick={() => setName('Saurabh')}>{name}</button>
      <MemoizedChild5 name={name} />
    </div>
  )
}

export default Parent5

/*
    When we click on the count button, the child is not re-rendered due to memoisation.
    When we are using impure components, we should understand the consequences of React.memo()
    Impure components -> the JSX changes even though the props and state are not changing.
        e.g. Components implementing Date or Math.random() which calculates a value and then uses it to render the UI.
*/
