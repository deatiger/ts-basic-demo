export default function anySample() {
  let ntr: any = 'Torahack' // string型を代入
  console.log('any sample 1:', typeof ntr, ntr)

  ntr = 28 // number型を再代入できる
  console.log('any sample 2:', typeof ntr, ntr)
}
