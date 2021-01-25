// 「01.環境構築」と「02.ESLint&Prettier」のサンプルコード
// import World from './world'
// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 「03.基本の型定義」のサンプルコード
// import { anySample, notExist, primitiveSample, unknownSample } from './basic'
// anySample()
// notExist()
// primitiveSample()
// unknownSample()

// 「04.関数の型定義」のサンプルコード
// import { logMessage, logMessage5 } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'
//
// logMessage('Hello TypeScript!')
// logMessage5('Hello Type Signature!')
// isUserSignedIn('ABC', 'Torahack')
// isUserSignedIn('123')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(1000, 2000, 500, 3000, 250)
// console.log('Function parameters sample 5: Total price:', sum)

// 「05.オブジェクトの型定義」のサンプルコード
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
// objectSample()
// typeAliasSample()

// 「06.配列とタプルの型定義」のサンプルコード
// import arraySample from './array/array'
// import tupleSample from './array/tuple'
// arraySample()
// tupleSample()

// 「07.ジェネリック型とポリモーフィズム」のサンプルコード
// import genericsSample from './generics/basic'
// import advancedSample from './generics/advanced'
// genericsSample()
// advancedSample()

// 「10.非同期処理の型定義」のサンプルコード
import callbackSample from './asynchronous/callback'
import promiseSample from './asynchronous/promise'
import asyncAwaitSample from './asynchronous/asyncAwait'
// callbackSample()
// promiseSample()
asyncAwaitSample()
