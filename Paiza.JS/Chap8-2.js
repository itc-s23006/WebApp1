const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('1つ目のメッセージを入力してください: ', message1 => {
  console.log(`入力された1つ目のメッセージ: ${message1}`)

  rl.question('2つ目のメッセージを入力してください: ', message2 => {
    console.log(`入力された2つ目のメッセージ: ${message2}`)
    rl.close()
  })
})
