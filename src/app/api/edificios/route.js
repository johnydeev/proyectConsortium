import {NextResponse} from 'next/server'
import Edificios from '@/Models/edificios'
import {connectDB} from '@/Utils/dbConnect'

connectDB()

export async function GET(){      
    console.log("Obteniendo todos los edificios...")
    const edif = await Edificios.find()
    return NextResponse.json(edif)
}

export async function POST(request){

    try {
        const data = await request.json()
        // console.log("data>>>",data)
        const newEdificio = new Edificios(data)        
        // console.log("newEdificio>>>",newEdificio)
        const saveEdificio = await newEdificio.save()
        console.log("Agregando nuevo edificio...")
        console.log(saveEdificio)
        return NextResponse.json(saveEdificio)        
        
    } catch (error) {
        return NextResponse.error(error.message, {status: 400})        
    }
}
