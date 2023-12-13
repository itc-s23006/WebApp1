const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 標準入力から整数データを受け取る
rl.question('整数を入力してください: ', input => {
  // 入力が整数かどうかを確認
  const parsedInput = parseInt(input, 10)

  if (isNaN(parsedInput)) {
    console.log('整数を入力してください。')
  } else {
    // 入力が100に等しい場合の処理
    if (parsedInput === 100) {
      console.log(`${parsedInput}`)
    } else if (parsedInput > 100) {
      // 入力が100より大きい場合の処理
      console.log('100より大きい')
    } else {
      // それ以外の場合の処理
      console.log('100以下です。')
    }
  }

  // インターフェースを閉じる
  rl.close()
})
