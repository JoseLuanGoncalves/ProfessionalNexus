const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000; 

app.use(cors());
app.use(express.json())

const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    }
    console.log('Conectado ao banco de dados "users.db".');
});

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL,
    Email TEXT NOT NULL UNIQUE
)`, (err) => {
    if (err) {
        console.error("ERRO GRAVE AO CRIAR TABELA:", err.message);
        process.exit(1); 
    }
    console.log("Tabela 'users' verificada e pronta.");
});

app.post('/registrar', (req,res) => {
    console.log("recebendo pedido de registro", req.body);

    const {Name,Email} = req.body;

    if (!Name || !Email) {
        return res.status(400).json({ error: 'Nome e Email são obrigatórios.' });
    }

    const sql = `INSERT INTO users (name,Email) VALUES (?,?)`;

    db.run(sql, [Name,Email], function(err) {
        if (err) {
            console.error("Erro ao inserir usuário no banco", err.message);
            return res.status(500).json({error: err.message});            
        }

        console.log(`Novo usuário criado com ID: ${this.lastID}`);
        res.status(201).json({
            message: 'usuário criado com sucesso',
            userid: this.lastID
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});

