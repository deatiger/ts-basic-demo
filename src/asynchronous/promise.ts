export default function promiseSample() {
  const url = 'https://api.github.com/users/deatiger'

  type Profile = {
    login: string
    id: number
  }

  const fetchProfilePromise = (): Promise<Profile | null> => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          // レスポンスbodyをJSONとして読み取った結果を返す
          res
            .json()
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfilePromise().then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous Promise Sample 2:', profile)
    }
  })
}
