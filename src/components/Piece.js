import React from 'react'
import { DragSource } from 'react-dnd'


// TODO: movement rules
// BISHOP: may only move onto the same color that it is currently on

const pieceSource = {
  beginDrag(props) {
    return {
      piece: props.piece,
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const Piece = (props) => {
  return props.connectDragSource(
    <div className="chessBoard__piece">
    ♝
    </div>
  )
}

export default DragSource('PIECE', pieceSource, collect)(Piece)