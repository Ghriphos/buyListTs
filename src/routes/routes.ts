import { Express, Request, Response } from "express"
import { userRoutes } from "./user"

export default function routes(routes: Express) {
    routes.get('/', (request: Request, response: Response) => {
        response.json({ message: 'hello world with Typescript' })
    })

    userRoutes(routes)
}
