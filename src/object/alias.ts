export default function typeAliasSample() {
  // 型エイリアス(type)
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample 2:', america)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard // 合併型: KnightとWizardどちらかの型を持つ
  type Paladin = Knight & Wizard // 交差型: KnightとWizardが持つ型を全て持っている

  // Knightの型を持つadventurer2
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  }

  console.log('Object alias sample 3:', adventurer1)

  // Wizardの型を持つadventurer2
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample 4:', adventurer2)

  // KnightとWizard両方の型を持つpaladin
  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤボール',
  }

  console.log('Object alias sample 5:', paladin)
}
