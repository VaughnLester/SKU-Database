import { db } from "../database.js";


//READ
async function getSkus(req, res) {
    try{
        const data = await db.query("SELECT * FROM projects");
        res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

async function skuByID(req, res) {
    try{
        const query = await db.query(`SELECT title FROM projects WHERE ID = ${req.body.id}`);
        res.send(query); 
    }
    catch(err){
        console.log(err);
    }
}


export {getSkus, skuByID}

