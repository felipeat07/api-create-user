import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.query

    user_id = user_id.toString()

    this.showUserProfileUseCase.execute({ user_id })

    return response.status(200).send()

  }
}

export { ShowUserProfileController };
