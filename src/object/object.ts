export default function objectSample() {
  // const a: object = {
  //   name: 'Torahack',
  //   age: 28
  // }
  // a.name // aというobjectにはnameというプロパティがないとエラーが出る
  //
  // console.log("Object object sample 1:", a)

  // オブジェクトリテラル記法による型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 2:', country)

  // 同じ構造のオブジェクトであれば再代入できる
  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 3:', country)

  // オプショナル(?)なプロパティと読み取り専用(readonly)プロパティ
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }
  torahack.lastName = 'Kamado'
  // torahack.firstName = 'Tanjiro' // firstNameプロパティはreadonlyなので再代入不可
  torahack.gender = 'male' // genderプロパティはオプショナルなので後から追加できる

  console.log('Object object sample 4:', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 5:', capitals)
}
