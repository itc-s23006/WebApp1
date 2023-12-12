const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('メッセージを入力してください: ', message => {
  console.log(`入力されたメッセージ: ${message}`)
  rl.close()
})
