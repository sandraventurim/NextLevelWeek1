const express = require("express")
const server = express()

//pegar o banco de dados

const db = require("./database/db")

// configurar pasta publica
server.use(express.static("public"))

// habilita o uso do req.body
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

// configurar caminhos aplicação
//pagina inicial
// req: Requisição
// res: resposta

server.get("/", (req,res) => {
    return res.render("index.html")
})

server.get("/create-point", (req,res) => {
    //req.query => query sting

    
    return res.render( "create-point.html")
})

server.post("/savepoint", (req,res) => {

    
    //inserir dados no banco de dados
    // retorna uma mensagem se nenhum item foi escolhido
    if (req.body.items == '') {
        return res.render("create-point.html",{ saved:false })
    }

    // 2.Inserir dados na tabela
    const query = `
    INSERT INTO places (
        name,
        image,
        address, 
        adress2,
        state, 
        city, 
        items
        ) VALUES (?,?,?,?,?,?,?);`

    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]

    function afterInsertData(err) {
        if (err) {
            
            return res.render("create-point.html",{ saved:false })
        }       
        

        return res.render("create-point.html",{ saved:true })
    }
    db.run(query,values, afterInsertData)


    
})

server.get("/search", (req,res) => {

    const search = req.query.search

    if (search == "") {
        return res.render( "search-results.html", { total:0 })

    }

         db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        

        const total = rows.length

        return res.render( "search-results.html", { places: rows, total })
    })
    
})



//ligar o servidor
server.listen(3000)

