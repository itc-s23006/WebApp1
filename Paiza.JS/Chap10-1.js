const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('整数を入力してください: ', input => {
  const number = parseInt(input)

  if (!isNaN(number)) {
    if (number >= 100) {
      console.log(`${number}`)
    }
  } else {
    console.log('入力が無効です。整数を入力してください。')
  }

  rl.close()
})
