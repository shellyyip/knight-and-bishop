const movementRules = {
  // General
  onePiecePerSquare: function (nextPos, piecePositions) {
    const filledSquares = Object.values(piecePositions)

    return !(filledSquares.find(filledSquarePos => {
      return JSON.stringify(filledSquarePos) === JSON.stringify(nextPos)
    }))
  },

  // Pieces
  bishop: {
    // Change in X & Y must be equal
    validateMove: function (prevPos, nextPos) {
      const [prevX, prevY] = prevPos
      const [nextX, nextY] = nextPos

      return Math.abs(prevX - nextX) === Math.abs(prevY - nextY)
    }
  },
  knight: {
    validateMove: function (prevPos, nextPos) {
      const [prevX, prevY] = prevPos
      const [nextX, nextY] = nextPos

      const dX = nextX - prevX;
      const dY = nextY - prevY;

      return (Math.abs(dX) === 2 && Math.abs(dY) === 1) 
        || (Math.abs(dX) === 1 && Math.abs(dY) === 2);
    }
  }
}

export default movementRules