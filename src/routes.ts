import { Express, Request, Response } from "express"

export default function routes(routes: Express) {
    routes.get('/', (request: Request, response: Response) => {
        response.json({ message: 'hello world with Typescript' })
    })

    userRoutes(routes)
}

export function userRoutes(routes: Express) {
    routes.post('/user/create', function (request: Request, response: Response) {
        const data = request.body  
    })
}
