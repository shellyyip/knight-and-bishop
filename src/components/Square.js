import React from 'react'
import { DropTarget } from 'react-dnd'
import Piece from './Piece'

const squareTarget = {
  drop(props, monitor) {
    return {}
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const Square = (props) => {
  const {
    x,
    y,
    bishopPosition,
  } = props

  let piece = null
  if ((x === bishopPosition[0]) && (y === bishopPosition[1])) {
    console.log('has piece')
    piece = <Piece />
  }

  return (
    <div className="chessBoard__square">
      {piece}
    </div>
  )
}

export default DropTarget('PIECE', squareTarget, collect)(Square)