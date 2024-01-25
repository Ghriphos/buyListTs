import { Express, Request, Response, json } from "express"

interface User {
    firstName: string, 
    lastName: string,
    age: number
}

export function userRoutes(routes: Express) {
    routes.post('/user/create', function (request: Request, response: Response) {
        const user: User = request.body
        

        console.log(user)
    })
}