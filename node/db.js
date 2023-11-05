const msSql = require('mssql');
const config = require('./config');

async function query(sql) {

    try {
        const pool = await msSql.connect(config.db);
        let res = await pool.request().query(sql)
        return res.recordset;
    }
    catch (error) {
        throw error;
    }
}


module.exports = {
    query
}