const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 標準入力から整数を1つ受け取る
rl.question('整数を入力してください: ', input => {
  // 入力された文字列を整数に変換
  const count = parseInt(input)

  // 入力された整数の回数分、メッセージを表示
  for (let i = 0; i < count; i++) {
    console.log('Hello paiza')
  }

  rl.close()
})
