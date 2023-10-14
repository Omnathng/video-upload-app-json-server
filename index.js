// import json-server
const jsonServer = require('json-server')

// create a setver for mediaplayer app
const mediaplayerserver=jsonServer.create()

// set up path/route from json file
const router = jsonServer.router('db.json')

// returns middlewares used by JSON server
const middlewares =jsonServer.defaults()

// set up port for running server
const port = 4000 || process.env.port

// use middlewares and router in server
mediaplayerserver.use(middlewares)
mediaplayerserver.use(router)

// to listen server fro resolving request from client
mediaplayerserver.listen(port,()=>{
    console.log(`media player server started at port ${port},and waiting for client request!!!`);
})