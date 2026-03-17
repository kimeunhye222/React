import React from 'react'

const Ex05LunchBox = ({menu}) => {
  return (
    <div style={{border : '2px solid gray', padding : '2%', borderRadius : '10px',margin :'5px 0'}}>

    <input type="checkbox"/>
    <span>{menu}</span>
    </div>
  )
}


export default Ex05LunchBox