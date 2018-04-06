import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import movementRules from '../movementRules'
import Square from './Square'

class Board extends React.Component {
  constructor() {
    super() 

    this.state = {
      piecePositions: {
        bishop: [1,1],
        knight: [1,2],
      }
    }

    this.validateMove = this.validateMove.bind(this)
    this.movePiece = this.movePiece.bind(this)
  }

  validateMove(piece, nextPos) {
    const prevPos = this.state.piecePositions[piece]
    // TODO: validate no other piece is on nextPos
    return movementRules[piece].validateMove(prevPos, nextPos)
  }

  movePiece(piece, squarePos) {
    this.setState({
      piecePositions: {
        [piece]: squarePos,
      }
    })
  }

  render() {
    const squares = []

    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        squares.push(
          <Square 
            x={x} 
            y={y} 
            key={`${x},${y}`}
            isBlack={(x + y) % 2 !== 0}
            piecePositions={this.state.piecePositions}
            validateMove={this.validateMove}
            handleDrop={this.movePiece}
          />
        )
      }
    }

    return (
      <div className="chessBoard">
        {squares}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)