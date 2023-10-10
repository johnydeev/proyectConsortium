import { connect,connection } from "mongoose";

const conn = {
    isConnected:false
}

export async function connectDB(){    
    if(conn.isConnected) return
    const db = await connect('mongodb+srv://castrojonathan:3485747321Qr@cluster0.j6tgbwk.mongodb.net/')
    console.log(db.connection.db.databaseName)
    conn.isConnected = db.connections[0].readyState
}
connection.on('connected', ()=>{
    console.log('mongoose connection established')
})

connection.on('error',(err)=>{
    console.log('mongoose connection error',err);
});
