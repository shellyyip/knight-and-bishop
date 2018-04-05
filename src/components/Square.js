import React from 'react'

const Square = (props) => {
  return (
    <div className="chessBoard__square">
      {props.children}
    </div>
  )
}

export default Square