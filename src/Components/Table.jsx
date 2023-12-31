import React from 'react';

const Table = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }
    const headers = Object.keys(data[0]);

    return (                          
                <div className="overflow-x-auto m-4">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden" id='table'>
                        <thead className="bg-gray-800 text-white">
                        <tr>
                            {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-left">
                                {header}
                            </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                        {data.map((item, rowIndex) => (
                            <tr key={rowIndex}>
                            {headers.map((header, columnIndex) => (
                                <td key={columnIndex} className="px-4 py-2 border-b border-gray-300">
                                {item[header]}
                                </td>
                            ))}
                            </tr>
                        ))}
                        </tbody>                        
                    </table>
                </div>          
    );
};

export default Table;
