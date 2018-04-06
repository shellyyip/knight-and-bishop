import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Square from './Square'

class Board extends React.Component {
  constructor() {
    super() 

    this.state = {
      bishopPosition: [1,1],
    }
  }

  render() {
    const squares = []

    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        squares.push(
          <Square 
            x={x} 
            y={y} 
            key={`${x}_${y}`}
            bishopPosition={this.state.bishopPosition}
          />
        )
      }
    }

    return (
      <div>
        {squares}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)