export default function nuknownSumple() {
  const maybeNumber: unknown = 10
  console.log('unknounSumple 1', typeof maybeNumber, maybeNumber)
  const isFoo = maybeNumber === 'foo'
  console.log('unknounSumple 2', typeof isFoo, isFoo)
  //   const sum = maybeNumber + 1
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 1
    console.log('unknounSumple 3', typeof sum, sum)
  }
}
