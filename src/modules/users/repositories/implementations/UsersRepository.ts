import e from 'express'
import { User } from '../../model/User'
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository'

class UsersRepository implements IUsersRepository {
  private users: User[]

  private static INSTANCE: UsersRepository

  private constructor() {
    this.users = []
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository()
    }

    return UsersRepository.INSTANCE
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User()

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    })

    this.users.push(user)
    console.log(this.users)

    return user
  }

  findById(id: string): User | undefined {
    const userExist = this.users.find(user => user.id === id)

    return userExist
  }

  findByEmail(email: string): User | undefined {
    const userExist = this.users.find(user => user.email === email)

    return userExist
  }

  turnAdmin(receivedUser: User): User {
    const updateUser = {
      id: receivedUser.id,
      name: receivedUser.name,
      email: receivedUser.email,
      created_at: receivedUser.created_at,
      updated_at: new Date(),
      admin: true,
    }

    const userIndex = this.users.findIndex(
      users => receivedUser.id === users.id
    )

    this.users[userIndex] = updateUser

    return updateUser
  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository }
