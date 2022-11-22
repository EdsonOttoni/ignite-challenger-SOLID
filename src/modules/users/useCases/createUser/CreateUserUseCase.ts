import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExistUser = this.usersRepository.findByEmail(email)

    if (alreadyExistUser) {
      throw new Error('User already Exist')
    }

    const user = this.usersRepository.create({ email, name })

    return user
  }
}

export { CreateUserUseCase }
