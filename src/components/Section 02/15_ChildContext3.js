/* [16] Context and same element reference */

import React, { useContext } from 'react'
import { CountContext } from './15_ParentContext3';

export const ChildA = () => {
  console.log('Rendered Child A');
  return <div>
    <h3>Child A</h3>
    <ChildB />
  </div>
}

const ChildB = () => {
  console.log('Rendered Child B');
  return <div>
    <h3>Child B</h3>
    <ChildC />
  </div>
}

const ChildC = () => {
  const count = useContext(CountContext)
  console.log('Rendered Child C');
  return <div>
    <h3>Child C - {count}</h3>
  </div>
}
