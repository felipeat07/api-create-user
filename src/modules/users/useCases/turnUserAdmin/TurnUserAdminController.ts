import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      let { user_id } = request.params

      user_id = user_id.toString()

      const user = this.turnUserAdminUseCase.execute({ user_id })

      return response.status(200).json(user)
    } catch (err) {
      return response.status(404).send({ "error": err })
    }
  }
}

export { TurnUserAdminController };
