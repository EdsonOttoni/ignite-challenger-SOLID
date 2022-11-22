import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  user_id: string
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const thereIsUser = this.usersRepository.findById(user_id)

    if (!thereIsUser) {
      throw new Error('User not exist')
    }

    const updateUser = this.usersRepository.turnAdmin(thereIsUser)

    return updateUser
  }
}

export { TurnUserAdminUseCase }
