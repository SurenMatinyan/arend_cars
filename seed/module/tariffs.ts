import { EntityManager } from "typeorm";
import {readFileSync} from "fs";
import {join} from "path"

export class Tariffs {
    constructor(private readonly entityManager: EntityManager) {}
    async seed(){
        try{
            const sql = readFileSync(join(__dirname.replace('module',''),'sql/tariffs.sql')).toString();
            await this.entityManager.query(sql);
        }catch(e){
            console.error(e)
        }
    }
}
