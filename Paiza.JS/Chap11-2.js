const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const lines = []

// 標準入力から複数行の文字列を受け取る
rl.on('line', line => {
  lines.push(line)
})

// 標準入力が終了したときの処理
rl.on('close', () => {
  // lines配列の各要素に対して処理を行う
  for (const inputString of lines) {
    // 入力が "Hello" と等しい場合の処理
    if (inputString === 'Hello') {
      console.log('こんにちは')
    } // 入力が"Good morning"の場合
    else if (inputString === 'Good morning') {
      console.log('おはよう')
    } else {
      // 入力が "Hello", "Good morning" と等しくない場合の処理
      console.log(`はじめまして`)
    }
  }
})
