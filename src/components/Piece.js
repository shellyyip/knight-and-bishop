import React from 'react'
import { DragSource } from 'react-dnd'
import classnames from 'classnames'

// TODO: movement rules
// BISHOP: may only move onto the same color that it is currently on

const pieceSource = {
  beginDrag(props) {
    return {
      piece: 'bishop',
    }
  },
  endDrag(props, monitor) {
    return {
      endSquare: monitor.getDropResult(),
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const Piece = (props) => {
  const pieceClasses = classnames({
    "chessBoard__piece--isDragging": props.isDragging,
    "chessBoard__piece": true,
  })

  return props.connectDragSource(
    <div className={pieceClasses}>
    ♝
    </div>
  )
}

export default DragSource('PIECE', pieceSource, collect)(Piece)