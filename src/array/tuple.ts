export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bad Request", "Email parameter is missing"] // 定義された要素数と合わない
  // response = ["400", "Bad Request"] // numberにstringを代入できない
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  console.log('Array tuple sample 2:', girlfriends)
}
