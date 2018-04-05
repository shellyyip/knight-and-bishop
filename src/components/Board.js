import React from 'react'
import Square from './Square'
import Piece from './Piece'

const Board = (props) => {
  return (
    <div>
      <Square />
      <Square>
        <Piece />
      </Square>
    </div>
  )
}

export default Board