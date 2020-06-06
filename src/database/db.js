//importar a dependecia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar objeto quer ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
    // com comandos sql 
    // 1.Criar uma tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT, 
    //         address TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2.Inserir dados na tabela
    // const query = `
    // INSERT INTO places (
    //     name,
    //     image,
    //     address, 
    //     adress2,
    //     state, 
    //     city, 
    //     items
    //     ) VALUES (?,?,?,?,?,?,?);`

    // const values = [
    //     "Papersider",
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //     "Guilherme Gembalia, Jardim América",
    //     "No. 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }
    // db.run(query,values, afterInsertData)

    // // 3.Consultar os dados da tabela

    // db.all("SELECT * FROM places", function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Consulta efetuada com sucesso!")
    //     console.log(rows)
    // })


    // 4.Deletar um dado da tabela
    // db.run(`DELETE FROM places`, [], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado com sucesso!")

    // })



//})

