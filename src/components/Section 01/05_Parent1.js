/* [06] Parent and Child */

import React, { useState } from 'react'
import Child1 from './05_Child1';

function Parent1() {
  const [count, setCount] = useState(0)
  console.log('Parent1 rendered');

  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count++</button>
      <button onClick={() => setCount(0)}>Set count to 0</button>
      <button onClick={() => setCount(5)}>Set count to 5</button>
      <Child1 />
    </div>
  )
}

export default Parent1

/*
    Parent Child and Render - use cases

    1. New State is different from the old state
        Here the Parent component gets rendered and as a result of which all its Child component also gets rendered (default rendering behavior in react).
        
    2. New State is same as the old state
        a. Right after the initial render -
            Here neither Parent nor Child component gets rendered. (Since old state is same as new state, react bails out of re-rendering)
        b. After re-renders -
            Here only the Parent component gets rendered.
            (React re-renders the component 1 more time as a safety measure but Child component is not re-rendered)

        In case 2b.
        Button click -> Parent component re-renders -> Child component re-renders
        DOM represented by Child component is never updated.
        Child component went through the render phase but not the commit phase i.e. "Unnecessary render". Unnecessary renders is not a bad thing but it affects the performance.

    Summary - 

    When a parent component renders, React will recursively render all of its child components.
    If new state same as old state after initial render ?
        Both parent and child do not re-render.
    If new state same as old state after re-renders ?
        Parent re-renders one more time but child never re-renders.
*/
