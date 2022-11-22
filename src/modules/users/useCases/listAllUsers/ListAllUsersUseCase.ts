import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
  user_id: string
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const thereIsUser = this.usersRepository.findById(user_id)

    if (!thereIsUser) {
      throw new Error('User not exist')
    }

    if (!thereIsUser.admin) {
      throw new Error('Do not have permission')
    }

    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase }
