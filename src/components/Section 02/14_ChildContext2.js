/* [15] Context and memo */

import React, { useContext } from 'react'
import { CountContext } from './14_ParentContext2';

const ChildA = () => {
  console.log('Rendered Child A');
  return <div>
    <h3>Child A</h3>
    <ChildB />
  </div>
}
export const MemoizedChildA = React.memo(ChildA)

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
