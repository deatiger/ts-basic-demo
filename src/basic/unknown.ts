export default function unknownSample() {
  const maybeNumber: unknown = 10 // unknown
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  // unknown型の値を比較することができる
  const isFoo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // const sum = maybeNumber + 10 // object is possibly unknownのエラーが出て代入できない

  // number型であるか確認した後なら代入可能
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
