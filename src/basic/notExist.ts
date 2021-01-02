export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'トラハック'
  if (name) {
    console.log('notExist sample 2:', typeof name, '吾輩は猫である。名前は' + name)
  } else {
    console.log('notExist sample 3:', '吾輩は猫である。名前はまだ' + name)
  }

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  age = 28
  // if (typeof age !== 'undefined') { // グローバル変数のチェックはこの判定方法
  if (age) {
    // この判定方法ならageがnullかundefinedの両方をチェックできる
    console.log('notExist sample 5:', typeof age, '年齢は' + age + 'です。')
  } else {
    console.log('notExist sample 6:', '年齢は秘密です。')
  }
}
