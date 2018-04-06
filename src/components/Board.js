import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Square from './Square'
import Piece from './Piece'

class Board extends React.Component {
  constructor() {
    super() 

    this.state = {
      bishopPosition: [0,0],
    }
  }

  render() {
    return (
      <div>
        <Square />
        <Square>
          <Piece piece="bishop" />
        </Square>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board)