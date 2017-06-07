import React from 'react'


//existe um 'return' implicito nessa função.
export default props =>(
    <div>
        {props.name} 
        <strong> {props.lastName}</strong>
        
   </div>
)