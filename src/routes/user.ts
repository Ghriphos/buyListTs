import { Express, Request, Response } from "express"

export function userRoutes(routes: Express) {
    routes.post('/user/create', function (request: Request, response: Response) {
        const data = request.body  
    })
}