function randomNumber() {
    return Math.floor(Math.random() * 100) + 1
  }
  const answer = randomNumber()
  let guessAnswer = randomNumber()
  let turn = 1
  while (answer !== guessAnswer) {
    if (answer > guessAnswer) {
      console.log(guessAnswer, 'too small')
    } else {
       console.log(guessAnswer, 'too large')
    }
    guessAnswer = randomNumber()
      turn ++
  }
  console.log(`Your number is: ${guessAnswer}. You win!`)

  