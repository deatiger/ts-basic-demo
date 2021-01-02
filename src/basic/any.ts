export default function anySample() {
  let name: any = 'Torahack' // string型を代入
  console.log('any sample 1:', typeof name, name)

  name = 28 // number型を再代入できる
  console.log('any sample 2:', typeof name, name)
}
