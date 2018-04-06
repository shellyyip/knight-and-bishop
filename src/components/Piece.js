import React from 'react'
import { DragSource } from 'react-dnd'
import classnames from 'classnames'

const pieceSource = {
  beginDrag(props) {
    return {
      piece: props.piece,
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

  let pieceIcon
  switch (props.piece) {
    case 'bishop':
      pieceIcon = <span>♝</span>
      break
    case 'knight':
      pieceIcon = <span>♞</span>
      break
    default:
      pieceIcon = <span>{props.piece}</span>
  }
  

  return props.connectDragSource(
    <div className={pieceClasses}>
      {pieceIcon}
    </div>
  )
}

export default DragSource('PIECE', pieceSource, collect)(Piece)