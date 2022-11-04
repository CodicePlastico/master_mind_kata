const evaluate = (secret, guess) => {
  let correctColors = 0,
      correctPositions = 0 

    correctPositions = findCorrectPosition(secret, guess)
    correctColors = findCorrectColors(secret, guess)

    return [correctPositions, correctColors]
}

const findCorrectPosition = (secret, guess) => {
  let correctPositions = 0

  correctPositions = secret.reduce((p, current, index) => {
    return p + (current == guess[index])
  }, 0)

  return correctPositions
}

const findCorrectColors = (secret, guess) => {
  let correctColors = 0

  for (let i = 0; i < secret.length; i++) {
    for (let j = 0; j < secret.length; j++) {
      if (secret[i] == guess[j] && i != j) {
        correctColors++
      }  
    }
  }

  return correctColors
}

module.exports = {
  evaluate
}