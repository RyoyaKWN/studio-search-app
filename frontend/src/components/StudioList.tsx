import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Studio {
    id: number;
    name: string;
    availability: boolean;
}

const StudioList: React.FC = () => {
    const [studios, setStudios] = useState<Studio[]>([]);
    const apiUrl = 'http://localhost:5000//api/studios';

    useEffect(() => {
        const fetchStudios = async () => {
            try {
                const response = await axios.get<Studio[]>(apiUrl);
                setStudios(response.data);
            } catch (error) {
                console.error('スタジオ情報の取得に失敗。', error);
            }
        };

        fetchStudios();
    }, []);

    return(
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-3x1 font-bold mb-6 text-blue-600">Studio List</h2>
        <div className="bg-white p-6 rounded-lg mb-6 shadow-md w-full max-w-md">
            <ul className="mb-4">
                {studios.map((studio) => (
                    <li key={studio.id}>
                        <h3>{studio.name}</h3>
                        <p>{studio.availability ? '空室' : '満室'}</p>
                    </li>
                ))}
            </ul>
        </div>
        {/* <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
            <button
              onClick={handleSearch}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
            Search
            </button>
        </div> */}
    </div>
    );
};

export default StudioList;