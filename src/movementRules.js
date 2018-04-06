const movementRules = {
  bishop: {
    // Change in X & Y must be equal
    validateMove: function (prevPos, nextPos) {
      const [prevX, prevY] = prevPos
      const [nextX, nextY] = nextPos

      return Math.abs(prevX - nextX) === Math.abs(prevY - nextY)
    }
  }
}

export default movementRules