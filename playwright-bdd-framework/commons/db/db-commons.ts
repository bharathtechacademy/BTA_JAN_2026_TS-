import { Client } from "pg";
import config from '../../config/config.json' with { type: 'json' };



export class DBCommons {

    async getData(query : string) : Promise<Array<Record<string,any>>>{

        //Create a new client instance configuration to connect with the database. 
        const dbConfig = new Client({
            host: config.db.host,
            port:config.db.port,
            user:config.db.user,
            password:config.db.password,
            database:config.db.database
        })

        //Connect to the database
        await dbConfig.connect();

        //Execute the query and get the data. 
        const data = await dbConfig.query(query);

        //close database connection
        await dbConfig.end();

        //return the data in the form of array of objects
        return data.rows;

    }

}

