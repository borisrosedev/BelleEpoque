export default class UsersService {
  constructor() {}

  async getUsers() {
    const result = await fetch("./data/users.json")
    const users = await result.json()
    console.log(users)
    return users
  }

  async getUserById(id: number | string) {
    let formattedId: number
    if (typeof id == "string") {
      formattedId = Number(id)
    } else {
      formattedId = id
    }
    const users = await this.getUsers()
    const user = users.find((us: any) => us.id === formattedId)
    if (user) {
      return user
    } else {
      return "bad request"
    }
  }

  async getUserByEmail(email: string) {
    return this.getUsers().then(users => {
      if (users.length) {
        const user = users.find((us: any) => us.email === email)
        if (!user) {
          return "bad request"
        } else {
          return user
        }
      }
      return "bad request"
    })
  }
}
