// 宣言のマージ
// インターフェースの場合
interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 350,
  type: 'hard',
}

// 型エイリアスの場合
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型(union)を使う

// MaboDofuとRice両方の型を持つ変数を定義
const maboDon: MaboDon = {
  calories: 500,
  gram: 100,
  spicyLevel: 5,
}

// インターフェースの拡張
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  cycle: 'weekly',
  page: 300,
  title: '週間少年ジャンプ',
}

// インターフェースは型エイリアスも拡張できる
type BookType = {
  page: number
  title: string
}

interface HandBook extends BookType {
  theme: string
}

const cotrip: HandBook = {
  page: 120,
  theme: '旅行',
  title: 'ことりっぷ',
}

// インターフェースでクラスに型を定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2016')
console.log(popularComic.getPublishYear()) // 鬼滅の刃が発売されたのは2016年です。
