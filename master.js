module.exports = {
  evaluate: (secret, guess) => {
    if (guess[0] == secret[0]) {
      return [1, 0]
    } 
    return [0, 0]
  }
}