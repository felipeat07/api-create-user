import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      let { user_id } = request.headers

      user_id = user_id.toString()

      const user = this.listAllUsersUseCase.execute({ user_id })

      return response.status(200).send(user)
    } catch (err) {
      return response.status(400).json({ "error": err })
    }
  }
}

export { ListAllUsersController };
