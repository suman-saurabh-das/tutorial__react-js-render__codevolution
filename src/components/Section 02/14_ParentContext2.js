/* [15] Context and memo */

import React, { useState } from 'react'
import { MemoizedChildA } from './14_ChildContext2'
export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

function ParentContext2() {
  const [count, setCount] = useState(0)
  console.log('Parent component rendered');

  return (
    <CountProvider value={count}>
      <div>
        <h3>Parent Component</h3>
        <button onClick={() => setCount(c => c + 1)}>
          Count++ : {count}
        </button>
        <MemoizedChildA />
      </div>
    </CountProvider>
  )
}

export default ParentContext2

