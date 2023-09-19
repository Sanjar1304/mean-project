import { escapeId, mysql } from 'mysql';

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'sanjar1304',
    database: 'buy-and-sell'
});


export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) => {
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (err, results, fields) => {
                if (err) reject(err);
                resolve({
                    results,
                    fields
                })
            })
        })
    }

}