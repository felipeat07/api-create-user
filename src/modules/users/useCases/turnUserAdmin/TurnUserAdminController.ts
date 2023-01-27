import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.query

    user_id = user_id.toString()

    this.turnUserAdminUseCase.execute({ user_id })

    return response.status(200).send()
  }
}

export { TurnUserAdminController };
