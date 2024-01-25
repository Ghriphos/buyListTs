import * as express from 'express'
import { Router, Request, Response} from 'express'
import routes from "./routes/routes"

const http = express()

http.use(express.json())
routes(http)

http.listen(3000, () => { console.log(`server running on port 3000`)})