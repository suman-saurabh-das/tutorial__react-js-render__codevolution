/* [16] Context and same element reference */

import React, { useState } from 'react'
export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

function ParentContext3({children}) {
  const [count, setCount] = useState(0)
  console.log('Parent component rendered');

  return (
    <CountProvider value={count}>
      <div>
        <h3>Parent Component</h3>
        <button onClick={() => setCount(c => c + 1)}>
          Count++ : {count}
        </button>
        {children}
      </div>
    </CountProvider>
  )
}

export default ParentContext3

/*
    When setter function is called in the parent component, react queues a re-render of the component. However react knows that the re-render is caused by a state change. The component also cannot modify its own props, which means the children prop could not have been modified. And children prop is nothing but Child A.
    
    Since child A is not modified, there is no need to re-render it. This is an optimization, which react automatically takes care of. As react goes down the component tree, it re-renders just the child C component as it consumes the context value which has been changed.

    So when we are using context in our application, we should wrap the immediate child of the context provider with React.memo or make sure to use the children props to make use of the same element reference optimization that react provides.
*/
