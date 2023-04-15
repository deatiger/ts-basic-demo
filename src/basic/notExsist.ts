export default function notExistSumple() {
  let name = null
  console.log('notExsist sample 1', typeof name, name)

  name = '祝井直樹'

  if (!name) {
    console.log('notExsist sample 2', '吾輩は猫である。名前はまだ' + name)
  } else {
    console.log('notExsist sample 3', '吾輩は猫である。名前は' + name)
  }

  let age = undefined
  console.log('notExsist sample 4', typeof age, age)

  age = 25

  if (!age) {
    //!→値が入っていたらfalseに。入っていなかったらtrueになる。
    console.log('notExsist sample5 ', '年齢は秘密です。')
  } else {
    console.log('notExsist sample5 ', '年齢は' + age + 'です')
  }
}
