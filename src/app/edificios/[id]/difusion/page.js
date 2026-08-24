"use client"
import React , { useState }from 'react'
import ReadExcel from '@/Components/ReadExcel'
import axios from 'axios'


const Difusion = () => {

    const [name, setName] = useState('');
    const [Gmail, setEmail] = useState('');

    const handleSendEmails = async () => {
        try {            
            const response = await axios.post('/api/sendmail', { name, Gmail });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Hubo un error al enviar el mail:', error);
        }
    };
    return (       
        <>
            <div className="flex justify-between p-2 text-center">
                <div className="p-2">Difusion</div>
                <div className="flex">
                    <label htmlFor="name" className="mr-2 p-2">
                        Nombre:
                    </label>
                    <input
                        className='w-48 px-2'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex">
                    <label htmlFor="email" className="mr-2 p-2">
                        Correo electrónico:
                    </label>
                    <input
                        className=' w-64 px-2'
                        type="email"
                        id="email"
                        value={Gmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    className="btn btn-primary bg-[#4F81BD] p-2 mx-4 text-white rounded-md"
                    onClick={handleSendEmails}
                >
                    Enviar mails
                </button>
            </div>    
            <ReadExcel />            
        </>    
    )
}
export default Difusion