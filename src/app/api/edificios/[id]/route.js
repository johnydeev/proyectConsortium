import { NextResponse } from "next/server";
import Edificios from "@/Models/edificios";
export const dynamicParams = true

export async function GET(request,{ params }) {

    try {
        const idEdificio = await Edificios.findById(params.id)
        if (!idEdificio) {
            return NextResponse.json({
                message: `Edificio no encontrado`
            },{
                status : 404
            }) 
        }    
        return NextResponse.json(idEdificio);
        
    } catch (error) {

        return NextResponse.json({
            message: `Error al obtener el edificio`
        },{
            status : 400
        })
        
    }
}
export async function PUT(request,{ params }) {

    try {
        const newEdificio = await request.json();
        console.log(newEdificio)
        const edificioUpdated = await Edificios.findByIdAndUpdate(params.id,newEdificio, { 
            new:true
        })
        if (!edificioUpdated) {
            return NextResponse.json({
                message: `Edificio no encontrado`
            },{
                status : 404
            }) 
        }  
    
        return NextResponse.json(edificioUpdated)
        
    } catch (error) {
        return NextResponse.json({message:"Error al actualizar edificio"},{status:400})        
    }
}

export async function DELETE(request,{ params }) {

    try {
        const edificioDeleted = await Edificios.findByIdAndDelete(params.id)
        if (!edificioDeleted) 
            return NextResponse.json({
                message: "edificio no encontrado"
            },{
                status:404
            })
        console.log("Eliminando edificio...")
        console.log(edificioDeleted)
        return NextResponse.json({message:`Edificio borrado...`,edificioDeleted})
        
    } catch (error) {
        return NextResponse.json({message:"Error al borrar edificio"},{status:400})        
    }

}




