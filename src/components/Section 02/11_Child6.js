/* [12] Incorrect memo with props reference */

import React from 'react'

function Child6({ children, name, person }) {
  console.log('Child 6 rendered');
  
  return (
    <div>
      {children} {name}
      {/* {person.fName} {person.lName} */}
    </div>
  )
}

export const MemoisedChild6 = React.memo(Child6)
