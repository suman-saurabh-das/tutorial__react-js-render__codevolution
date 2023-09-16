/* [04] useReducer */

import React, { useReducer } from 'react'

function UseReducer() {
  const initialState = 0

  const reducer = (state, action) => {
    switch (action) {
      case 'increment': return state + 1
      case 'decrement': return state - 1
      case 'reset': return initialState
      default: return state
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  console.log('UseReducer rendered');

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer

/*
  The dispatch function from a useReducer hook will cause the component to re-render.
  The exception is when you update the state to the same value as the current state.
    Same value after the initial render ? Then component will not re-render.
    Same value after re-renders ? React will render that specific component one more time and then bailout from any subsequent renders.

    *** React 18 UPDATE ***
    The component re-rendering any number of times on pressing 'Reset' is expected behavior.
    Early bailout of the hook useReducer presented in the video has been removed from React v18.

    Remove useReducer eager bailout - https://github.com/facebook/react/pull/22445
*/
