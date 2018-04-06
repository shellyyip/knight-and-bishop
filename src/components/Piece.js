import React from 'react'
import { DragSource } from 'react-dnd'

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
    <div>
    ♞
    </div>
  )
}

export default DragSource('PIECE', pieceSource, collect)(Piece)