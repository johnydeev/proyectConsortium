import {transporter, mailOptions} from '@/Utils/sendEmails';
import { NextResponse } from 'next/server';
// import { promises as fs } from 'fs';

export async function POST(request){
    const {name,Gmail} = await request.json()  
    console.log("name>>>",name)
    console.log("Gmail>>>",Gmail)
    // console.log("mailOptions>>>",mailOptions)
    // await fs.writeFile('./promesas.txt', 'Hola mundo con promesas')
    // await fs.appendFile('./promesas.txt', 'Como estas??')
    // const response = await fs.readFile('./promesas.txt', 'utf-8')
    // console.log("response>>>",response)
    // await fs.unlink('./promesas.txt')
    try {
        if(!name || !Gmail){
            return NextResponse.json({message:"Faltan datos"})
        }
        const response = await transporter.sendMail({
            from:"mensaje enviado por <>",
            to:Gmail,
            subject:"Prueba de envio CV adjunto",
            text:`Hola ${name}, este es un mensaje de prueba con adjunto enviado desde el servidor de nextjs`,
            attachments:{                
                // path: attachment,
                path: "C:/Users/jony/Desktop/Kaba/consortium/src/assets/cv.pdf", 
                contentType: 'application/pdf',                
            },
        })
        console.log("envio exitoso",response)
        return NextResponse.json('successful shipment')
        
    } catch (error) {
        console.log("error>>>",error)
        return NextResponse.json(error)    
    }
}