import React from 'react'
import { DropTarget } from 'react-dnd'
import classnames from 'classnames'
import Piece from './Piece'

const squareTarget = {
  canDrop(props, monitor) {
    return props.validateMove(
      monitor.getItem().piece,
      [props.x, props.y], // next pos
    )
  },
  drop(props, monitor) {
    props.handleDrop('bishop', [props.x, props.y])
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

/**
 * Determines whether a square contains a piece, and returns the component
 * of that piece.
 * 
 * @param {array} squarePos - [x, y] position of current square
 * @param {array} piecePositions - array of game pieces with their positions as a position array [x, y]
 */
function hasPiece(squarePos, piecePositions) {
  for (let piece in piecePositions) {
    const piecePos = piecePositions[piece]
    const [pieceX, pieceY] = piecePos 
    const [squareX, squareY] = squarePos

    if ((squareX === pieceX) && (squareY === pieceY)) {
      return <Piece />
    }
  }
  
  return null
}

const Square = (props) => {
  const {
    x,
    y,
    isBlack,
    isOver,
    piecePositions,
  } = props

  let piece = hasPiece([x, y], piecePositions) 

  const squareClasses = classnames({
    'chessBoard__square--black': isBlack,
    'chessBoard__square--isOver': isOver,
    'chessBoard__square': true,
  })

  return props.connectDropTarget(
    <div className={squareClasses}>
      {piece}
    </div>
  )
}

export default DropTarget('PIECE', squareTarget, collect)(Square)