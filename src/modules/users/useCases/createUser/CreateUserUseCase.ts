import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest) {
    const emailArealdyExists = this.usersRepository.findByEmail(email)

    if(emailArealdyExists) {
      throw new Error("Email already exists!")
    }

    this.usersRepository.create({ name, email })
  }
}

export { CreateUserUseCase };
