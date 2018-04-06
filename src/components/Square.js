import React from 'react'
import { DropTarget } from 'react-dnd'

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
  return (
    <div className="chessBoard__square">
      {props.children}
    </div>
  )
}

export default DropTarget('PIECE', squareTarget, collect)(Square)