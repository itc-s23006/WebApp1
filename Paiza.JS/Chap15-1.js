const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 標準入力から整数を1つ受け取る関数
function getInput () {
  return new Promise(resolve => {
    rl.question('整数を入力してください: ', input => {
      resolve(parseInt(input))
    })
  })
}

// メッセージを表示する関数
function displayMessage (number) {
  if (number === 0) {
    console.log(`${number}は0`)
  } else if (number > 0) {
    console.log(`${number}はプラス`)
  } else {
    console.log(`${number}はマイナス`)
  }
}

// メインの処理
async function main () {
  // 1. 標準入力から整数を1つ受け取る
  const inputNumber = await getInput()

  // 2. 受け取った整数を表示する
  console.log(`${inputNumber}`)

  // 3. 受け取った整数回分、メッセージを表示する
  for (let i = 0; i < Math.abs(inputNumber); i++) {
    displayMessage(inputNumber)
  }

  // 終了処理
  rl.close()
}

// メインの処理を実行
main()
