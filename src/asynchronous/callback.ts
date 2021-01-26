export default function callbackSample() {
  const url = 'https://api.github.com/users/deatiger'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => void

  // コールバックで呼び出す非同期関数(fetch)
  const fetchProfileCallback: FetchProfile = () => {
    fetch(url)
      .then((res) => {
        // レスポンスbodyをJSONとして読み取った結果を返す
        res
          .json()
          .then((json: Profile) => {
            console.log('Asynchronous Callback Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
            return null
          })
      })
      .catch((error) => {
        console.error(error)
        return null
      })
  }

  const profile = fetchProfileCallback()
  // 非同期処理が完了していないのでPromise<pending>が表示される
  console.log('Asynchronous Callback Sample 2:', profile)
}
