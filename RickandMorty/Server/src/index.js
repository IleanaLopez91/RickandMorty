/*const http = require("http");
const data = require("./utils/data");
const getCharById = require("./controllers/getCharById")
require("dotenv").config();
const {PORT} = process.env

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url}=req;
    //if(url.includes("/rickandmorty/character")){
    //    const id = Number(url.split("/").at(-1));
    //    const respuesta = data.filter((char) => { return char.id === id});
    //    res.writeHead(200, {"Content-type" : "aplication/json"})
    //    res.end(JSON.stringify(respuesta))
    //}
    if(url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").at(-1));
        getCharById(res, id)
    }
}).listen(PORT, "localhost", ()=>{
    console.log(`SERVIDOR EN PUERTO: ${PORT}`)
})*/

const server = require("./app");
require("dotenv").config();
const {PORT} = process.env;
const { conn } = require('./DB_connection');

conn
    .sync({
        force:true,
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log('Server raised in port: ' + PORT);
         })
    })
    .catch((error) => console.log(error))

