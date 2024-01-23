import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { BuyList } from "./entity/BuyList"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    username: "sa",
    password: "12we34rt",
    database: "typeorm-test",
    synchronize: true,
    logging: true,
    entities: [User, BuyList],
    migrations: [],
    subscribers: [],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
})
