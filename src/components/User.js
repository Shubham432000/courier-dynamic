import React from 'react'


const User = (props) => {
  
  return (
      <div className='user'>
    <div className='user1'> 
     {alert(props.name ?`welcome ${props.name}`:' ')}
     <h1>{props.name  ? `Welcome - ${props.name} `:' '}</h1>
     </div>
    </div>
  )
}

export default User